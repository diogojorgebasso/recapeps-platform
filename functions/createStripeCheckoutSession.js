const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onRequest } = require("firebase-functions/v2/https");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const db = getFirestore();

const createStripeCheckoutSession = onRequest(async (req, res) => {
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
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: { firebaseUID: userId },
    });

    const paymentData = {
      amount: amount / 100,
      currency: "usd",
      status: "pending",
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

module.exports = { createStripeCheckoutSession };
