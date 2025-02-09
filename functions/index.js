const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

initializeApp();

const db = getFirestore();

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

exports.deleteUserDocument = functions.auth.user().onDelete(async (user) => {
  console.log("Deleting user data:", user.uid);
  const userUid = user.uid;
  const userDocRef = db.collection("users").doc(userUid);

  try {
    const docSnapshot = await userDocRef.get();

    if (!docSnapshot.exists) {
      logger.warn(`Document for user ${userUid} not found in Firestore.`);
    } else {
      await userDocRef.delete();
      logger.info(`User ${userUid} deleted from Firestore successfully.`);
    }

    const userFolderRef = admin.storage().bucket().file(`user/${userUid}`);

    const [exists] = await userFolderRef.exists();

    if (exists) {
      await userFolderRef.delete();
      logger.info(
        `User folder user/${userUid} deleted from Storage successfully.`
      );
    }
  } catch (error) {
    logger.error("Error deleting user data:", error);
  }
});

exports.createStripeCheckoutSession = onRequest(
  { cors: "https://recapeps.fr" },
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
      res
        .status(401)
        .json({ error: "Unauthenticated request. Token missing." });
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
    logger.info(`User ${userId} authenticated successfully.`);
    logger.info("Request body:", req.body.data);
    const { priceId, quantity = 1 } = req.body.data;
    if (!priceId) {
      res.status(400).json({ error: "Invalid subscription data." });
      return;
    }

    try {
      // Recupera ou cria um cliente no Stripe
      let customer;
      const userDoc = await db.collection("users").doc(userId).get();
      if (userDoc.exists && userDoc.data().stripeCustomerId) {
        logger.info(`Customer found for user ${userId}.`);
        customer = userDoc.data().stripeCustomerId;
      } else {
        logger.info(`Creating customer for user ${userId}.`);
        const customerData = await stripe.customers.create({
          email: userDoc.data().email,
          metadata: { firebaseUID: userId },
        });
        customer = customerData.id;
        await db
          .collection("users")
          .doc(userId)
          .update({ stripeCustomerId: customer });
      }

      // Cria a assinatura no Stripe
      const subscription = await stripe.subscriptions.create({
        customer,
        items: [{ price: priceId, quantity }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
      });

      // Salva no Firestore
      await db.collection("users").doc(userId).collection("subscriptions").add({
        subscriptionId: subscription.id,
        priceId,
        createdAt: FieldValue.serverTimestamp(),
        status: subscription.status,
      });

      // Retorna o client_secret para o front
      const paymentIntent = subscription.latest_invoice.payment_intent;
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Error creating subscription:", error);
      res.status(500).json({ error: "Failed to create subscription." });
    }
  }
);

exports.cancelSubscription = onRequest(
  { cors: "https://recapeps.fr" },
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
      res
        .status(401)
        .json({ error: "Unauthenticated request. Token missing." });
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

    const { subscriptionId } = req.body;
    if (!subscriptionId) {
      res.status(400).json({ error: "Invalid subscription data." });
      return;
    }

    try {
      // Cancela a assinatura no Stripe
      await stripe.subscriptions.del(subscriptionId);
      // Atualiza o status da assinatura no Firestore
      const subscriptionRef = db
        .collection("users")
        .doc(userId)
        .collection("subscriptions")
        .doc(subscriptionId);
      await subscriptionRef.update({ status: "canceled" });
      res.status(200).json({ message: "Subscription canceled successfully." });
    } catch (error) {
      console.error("Error canceling subscription:", error);
      res.status(500).json({ error: "Failed to cancel subscription." });
    }
  }
);
