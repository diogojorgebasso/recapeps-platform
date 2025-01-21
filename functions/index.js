const {initializeApp} = require("firebase-admin/app");
const {getFirestore, FieldValue } = require("firebase-admin/firestore");
const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const functions = require('firebase-functions/v1');
const admin = require("firebase-admin")
const { onSchedule } = require("firebase-functions/v2/scheduler");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

initializeApp();

const db = getFirestore();

// Exporte as funções (NÃO altere a lógica interna):
exports.saveRoleToFirestore = functions.auth.user().onCreate(async (user) => {
  try {
    const { uid, email, displayName, photoURL } = user;
    const role = email && email.endsWith("@recapeps.com") ? "admin" : "user";

    const userData = {
      uid,
      email: email || null,
      name: displayName || null,
      photoURL: photoURL || null,
      emailNotifications: true,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      role,
    };

    await db.collection("users").doc(uid).set(userData);
    logger.info(`User ${uid} saved to Firestore successfully.`);

    await admin.auth().setCustomUserClaims(uid, { role });
    logger.info(`Role ${role} saved to user ${uid} successfully.`);

  } catch (error) {
    logger.error("Error saving user to Firestore:", error);
  }
});

exports.cleanUpAnonymousUsers = onSchedule(
  {
    schedule: "0 0 * * *", 
    timeZone: "America/Sao_Paulo",
  },
  async () => {
    const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    let nextPageToken;
    let deletedCount = 0;

    do {
      const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
      const usersToDelete = listUsersResult.users.filter((user) => {
        const lastSignInTime = user.metadata.lastSignInTime;
        if (!lastSignInTime) return true;
        const diff = now - new Date(lastSignInTime).getTime();
        const isAnonymous = user.providerData.length === 0;
        return isAnonymous && diff > THIRTY_DAYS_IN_MS;
      });

      for (const user of usersToDelete) {
        await admin.auth().deleteUser(user.uid);
        deletedCount++;
        console.log(`Usuário anônimo ${user.uid} deletado.`);
      }

      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);

    console.log(`Limpeza concluída. Total de usuários deletados: ${deletedCount}.`);
    return null;
  }
);

exports.deleteUserDocument = functions.auth.user().onDelete(async (user) => {
  const userUid = user.uid;
  const userDocRef = db.collection("users").doc(userUid);
  const userFolderRef = admin.storage().bucket().file(`user/${userUid}`);

  try {
    await userDocRef.delete();
    logger.info(`User ${userUid} deleted from Firestore successfully.`);

    const [exists] = await userFolderRef.exists();

    if (exists) {
      await userFolderRef.delete();
      logger.info(`User folder user/${userUid} deleted from Storage successfully.`);
    }
  } catch (error) {
    logger.error("Error deleting user data:", error);
  }
});

exports.createStripeCheckoutSession = onRequest(
  { cors: "https://recapeps-platform.web.app" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method Not Allowed" });
      return;
    }

    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split("Bearer ")[1]
      : null;

    if (!token) {
      res.status(401).json({ error: "Unauthenticated request. Token missing." });
      return;
    }

    let userId;
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      userId = decodedToken.uid;
    } catch (error) {
      res.status(401).json({ error: "Invalid authentication token." });
      return;
    }

    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      res.status(400).json({ error: "Invalid items payload." });
      return;
    }

    try {
      const amount = items.reduce(
        (total, item) => total + item.amount * item.quantity,
        0
      );

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
        metadata: { firebaseUID: userId },
      });

      const paymentData = {
        amount,
        currency: "eur",
        status: "pending",
        createdAt: FieldValue.serverTimestamp(),
        items,
        paymentIntentId: paymentIntent.id,
      };

      await db
        .collection("users")
        .doc(userId)
        .collection("payments")
        .add(paymentData);

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Error creating Stripe Payment Intent:", error);
      res.status(500).json({ error: "Failed to create payment session." });
    }
  }
);
