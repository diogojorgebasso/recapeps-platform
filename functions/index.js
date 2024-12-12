const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
require("dotenv").config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);

admin.initializeApp();
const db = admin.firestore();

exports.saveRoleToFirestore = functions.auth.user().onCreate(async (user) => {
    try {
        const { uid, email, displayName, photoURL } = user;

        // Determine the role based on the email domain
        const role = email && email.endsWith("@recapeps.com.br") ? "admin" : "user";

        const userData = {
            uid: uid,
            email: email || null,
            name: displayName || null,
            photoURL: photoURL || null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            role: role, // Assign role dynamically
        };

        await db.collection("users").doc(uid).set(userData);

        logger.info(`User ${uid} saved to Firestore successfully.`);
    } catch (error) {
        logger.error("Error saving user to Firestore:", error);
    }
});


exports.deleteUserDocument = functions.auth
    .user()
    .onDelete(async (user) => {
        return db.collection("users").doc(user.uid).delete().then(() => {
            logger.info(`User ${user.uid} deleted from Firestore successfully.`);
        }).catch((error) => {
            logger.error("Error deleting user from Firestore:", error);
        });
});

exports.createStripeCheckoutSession = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "User must be authenticated.");
  }

  const { items } = data;
  const userId = context.auth.uid;

  try {
    // Calculate the total amount in cents
    const amount = items.reduce((total, item) => total + item.amount * item.quantity, 0);

    // Create a Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: { firebaseUID: userId },
    });

    // Save payment details to Firestore under the user's document
    const paymentData = {
      amount: amount / 100, // Store in dollars for readability
      currency: "usd",
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      items: items, // Save the list of items
      paymentIntentId: paymentIntent.id,
    };

    await db.collection("users").doc(userId).collection("payments").add(paymentData);

    // Return the client secret to the frontend for payment confirmation
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error("Error creating Stripe Payment Intent:", error);
    throw new functions.https.HttpsError("internal", "Failed to create payment session.");
  }
});