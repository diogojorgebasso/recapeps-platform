const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const path = require("path");
const sharp = require("sharp");

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

    // Stripe deletion logic
    if (docSnapshot.exists) {
      if (docSnapshot.data().stripeCustomerId) {
        const stripeCustomerId = docSnapshot.data().stripeCustomerId;
        const subscriptions = await stripe.subscriptions.list({
          customer: stripeCustomerId,
          status: "all",
        });
        for (let subscription of subscriptions.data) {
          if (subscription.status !== "canceled") {
            await stripe.subscriptions.del(subscription.id);
            logger.info(
              `Cancelled subscription ${subscription.id} for user ${userUid}.`
            );
          }
        }
        await stripe.customers.del(stripeCustomerId);
        logger.info(
          `Stripe customer ${stripeCustomerId} deleted for user ${userUid}.`
        );
      }
      await userDocRef.delete();
      logger.info(`User ${userUid} deleted from Firestore successfully.`);
    } else {
      logger.info(`No Stripe customer ID found for user ${userUid}.`);
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
      res.status(405).json({ data: { error: "Method Not Allowed" } });
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
        metadata: { firebaseUID: userId },
      });

      logger.info("Subscription created:", subscription);

      // Salva no Firestore
      await db
        .collection("users")
        .doc(userId)
        .collection("subscriptions")
        .doc(subscription.id)
        .set({
          priceId,
          createdAt: FieldValue.serverTimestamp(),
          status: subscription.status,
          subscriptionId: subscription.id,
          cancelAt: subscription.cancel_at,
        });

      // Retorna o client_secret para o front
      const paymentIntent = subscription.latest_invoice.payment_intent;
      res
        .status(200)
        .json({ data: { clientSecret: paymentIntent.client_secret } });
    } catch (error) {
      console.error("Error creating subscription:", error);
      res
        .status(500)
        .json({ data: { error: "Failed to create subscription." } });
    }
  }
);

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  try {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error("Webhook secret not configured");
    }

    const event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      webhookSecret
    );

    logger.debug(event.type);
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object;
      const userId = subscription.metadata.firebaseUID;
      const subscriptionId = subscription.id;

      if (!userId) {
        logger.error("No userId found in subscription metadata");
        return;
      }
      logger.debug("starting to search user.");
      const subscriptionRef = db
        .collection("users")
        .doc(userId)
        .collection("subscriptions")
        .doc(subscriptionId);

      logger.debug("starting to update subscription.");
      const updateData = {
        status: subscription.cancel_at_period_end
          ? "canceled"
          : subscription.status,
        cancelAt: subscription.cancel_at || null,
        currentPeriodEnd: subscription.current_period_end,
        currentPeriodStart: subscription.current_period_start,
        canceledAt: subscription.canceled_at || null,
        updatedAt: FieldValue.serverTimestamp(),
      };

      if (subscription.cancel_at_period_end) {
        updateData.cancellationDetails = subscription.cancellation_details;
      }

      await subscriptionRef.update(updateData);
      logger.info(`Subscription ${subscriptionId} updated successfully`);
    }
  } catch (error) {
    logger.error("Webhook error:", error.message);
    if (!res.headersSent) {
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
});

exports.createPortalSession = onRequest(
  { cors: "https://recapeps.fr" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ data: { error: "Method Not Allowed" } });
      return;
    }

    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split("Bearer ")[1]
      : null;

    if (!token) {
      res.status(401).json({ data: { error: "Unauthenticated request" } });
      return;
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;

      // Retrieve Stripe customer ID from Firestore
      const userDoc = await db.collection("users").doc(userId).get();
      const stripeCustomerId = userDoc.data()?.stripeCustomerId;

      if (!stripeCustomerId) {
        logger.error(`Customer not found for user ${userId}`);
        res.status(404).json({ data: { error: "Customer not found" } });
        return;
      }

      // Create portal session
      const session = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: "https://recapeps.fr/profil",
      });
      logger.info(`Portal session created: ${session.id} ${session.url}`);
      res.status(200).json({ data: { url: session.url } });
    } catch (error) {
      logger.error("Error creating portal session:", error);
      res.status(500).json({ data: { error: "Internal server error" } });
    }
  }
);

exports.resizeImageOnUpload = functions.storage
  .object()
  .onFinalize(async (object) => {
    if (!object.name || !object.contentType?.startsWith("image/")) return;
    try {
      const bucket = admin.storage().bucket(object.bucket);
      const tempFilePath = path.join("/tmp", path.basename(object.name));
      await bucket.file(object.name).download({ destination: tempFilePath });
      const resizedFilePath = `${tempFilePath}_resized`;
      await sharp(tempFilePath).resize(50, 50).toFile(resizedFilePath);
      await bucket.upload(resizedFilePath, {
        destination: object.name,
        metadata: { contentType: object.contentType },
      });
    } catch (error) {
      logger.error("Error resizing image:", error);
    }
  });
