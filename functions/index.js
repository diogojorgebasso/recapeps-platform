import * as admin from "firebase-admin";
import * as functions from "firebase-functions"; // Gen1 import
import { onSchedule } from "firebase-functions/v2/scheduler"; // Gen2 import
const { onRequest } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app = initializeApp();  
const auth = getAuth(app);
const db = getFirestore();

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const saveRoleToFirestore = functions.auth.user().onCreate(async (user) => {
  try {
      const { uid, email, displayName, photoURL } = user;

      const role = email && email.endsWith("@recapeps.com") ? "admin" : "user";

      const userData = {
          uid: uid,
          email: email || null,
          name: displayName || null,
          photoURL: photoURL || null,
          emailNotifications: true,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          role: role, 
      };

      await db.collection("users").doc(uid).set(userData);
      logger.info(`User ${uid} saved to Firestore successfully.`);

      await admin.auth().setCustomUserClaims(uid, { role: role });
      logger.info(`Role ${role} saved to user ${uid} successfully.`);
  } catch (error) {
      logger.error("Error saving user to Firestore:", error);
  }
});

export const cleanUpAnonymousUsers = onSchedule(
  {
    schedule: "0 0 * * *", // todo dia meia-noite UTC
    timeZone: "America/Sao_Paulo", // opcional, se quiser especificar fuso
  },
  async (event) => {

  const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  let nextPageToken;
  let deletedCount = 0;

  do {
    const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
    const usersToDelete = listUsersResult.users.filter((user) => {
      const lastSignInTime = user.metadata.lastSignInTime;
      // Se não existir lastSignInTime, consideramos como "muito antigo"
      if (!lastSignInTime) return true;
      const lastSignInDate = new Date(lastSignInTime).getTime();
      const diff = now - lastSignInDate;
      const isAnonymous = user.providerData.length === 0;

      return isAnonymous && diff > THIRTY_DAYS_IN_MS;
    });

    // Deleta cada um dos usuários filtrados
    for (const user of usersToDelete) {
      await admin.auth().deleteUser(user.uid);
      deletedCount++;
      console.log(`Usuário anônimo ${user.uid} deletado.`);
    }

    // Se houver mais páginas, pegamos o token para iterar
    nextPageToken = listUsersResult.pageToken;
  } while (nextPageToken);

  console.log(`Limpeza concluída. Total de usuários deletados: ${deletedCount}.`);
  return null;
});

export const deleteUserDocument = functions.auth
  .user()
  .onDelete(async (user) => {
      const userUid = user.uid;
      const userDocRef = db.collection("users").doc(userUid);
      const userFolderRef = admin.storage().bucket().file(`user/${userUid}`);

      try {
          // Delete user document from Firestore
          await userDocRef.delete();
          logger.info(`User ${userUid} deleted from Firestore successfully.`);

          // Delete user folder from Storage
          await userFolderRef.delete();
          logger.info(`User folder user/${userUid} deleted from Storage successfully.`);
      } catch (error) {
          logger.error("Error deleting user data:", error);
      }
  });

export const createStripeCheckoutSession = onRequest({ cors: "https://recapeps-platform.web.app" }, async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.split("Bearer ")[1] : null;

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
    const amount = items.reduce((total, item) => total + item.amount * item.quantity, 0);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
      metadata: { firebaseUID: userId },
    });

    const paymentData = {
      amount: amount,
      currency: "eur",
      status: "pending", // when is this updated?
      createdAt: FieldValue.serverTimestamp(),
      items,
      paymentIntentId: paymentIntent.id,
    };

    await db.collection("users").doc(userId).collection("payments").add(paymentData);

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating Stripe Payment Intent:", error);
    res.status(500).json({ error: "Failed to create payment session." });
  }
});
