import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { error, info, debug } from "firebase-functions/logger";
import Stripe from "stripe";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}
const stripe = new Stripe(stripeSecretKey);

interface CheckoutSessionRequest {
  priceId: string;
}

export const createStripeCheckoutSession = onCall<CheckoutSessionRequest>(
  { 
    cors: "https://recapeps.fr", 
    enforceAppCheck: true 
},
  async (request) => {
    const { priceId } = request.data;
    const userId = request.auth?.uid;

    if (!userId) {
      throw new HttpsError("unauthenticated", "Authentication required");
    }

    if (!priceId) {
      throw new HttpsError(
        "invalid-argument",
        "Invalid subscription data. priceId is required."
      );
    }

    try {
      // Retrieve or create a Stripe customer
      let customer: string;
      const userDoc = await db.collection("users").doc(userId).get();

      if (userDoc.exists && userDoc.data()?.stripeCustomerId) {
        info(`Customer found for user ${userId}.`);
        customer = userDoc.data()?.stripeCustomerId;
      } else {
        info(`Creating customer for user ${userId}.`);
        const customerData = await stripe.customers.create({
          email: userDoc.data()?.email,
          name: userDoc.data()?.name,
          metadata: { firebaseUID: userId },
        });
        customer = customerData.id;
        await db.collection("users").doc(userId).update({ stripeCustomerId: customer });
      }

      // Create a Stripe Checkout Session for a subscription
      const session = await stripe.checkout.sessions.create({
        customer, // Link to the Stripe customer
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: "https://recapeps.fr/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "https://recapeps.fr/cancel",
        metadata: { firebaseUID: userId },
      });

      info(`Checkout session created for user ${userId}: ${session.id}`);

      // Return the session ID to the frontend
      return { id: session.id };
    } catch (err) {
      const e = err as Error;
      error("Error creating checkout session:", e);
      throw new HttpsError("internal", "Failed to create checkout session");
    }
  }
);

export const stripeWebhook = onRequest( async (req, res) => {
  try {
    const sig = req.headers["stripe-signature"] as string;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      throw new Error("Webhook secret not configured");
    }

    // Construct the Stripe event using the raw body
    const event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      webhookSecret
    );

    debug(`Received event: ${event.type}`);

    // Handle customer.subscription.updated event
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object as Stripe.Subscription;
      const subscriptionId = subscription.id;
      const stripeCustomerId = subscription.customer as string;
      debug(`Subscription ${subscriptionId} updated for user ${stripeCustomerId}`);
      const userSnapshot = await db.collection("users").where("stripeCustomerId", "==", stripeCustomerId).get();

      if (userSnapshot.empty) {
        error(`No user found for Stripe customer ID ${stripeCustomerId}`);
        res.status(404).send("User not found");
        return;
      }

      const userId = userSnapshot.docs[0].id;
      const subscriptionRef = db
        .collection("users")
        .doc(userId)
        .collection("subscriptions")
        .doc(subscriptionId);

      debug("Starting to update subscription.");

      await subscriptionRef.set(subscription, { merge: true });
      info(`Subscription ${subscriptionId} updated successfully`);
      res.status(200).send("Webhook received");
    } else {
      // Acknowledge unhandled event types
      res.status(200).send("Event type not handled");
    }
  } catch (err) {
    const e = err as Error;
    error("Webhook error:", e.message);
    if (!res.headersSent) {
      res.status(400).send(`Webhook Error: ${e.message}`);
    }
  }
});

export const createPortalSession = onCall(
  { cors: "https://recapeps.fr", enforceAppCheck: true },
  async (request) => {

    const userId = request.auth?.uid;

    if (!userId) {
      throw new HttpsError("unauthenticated", "Authentication required");
    }

    try {
      // Retrieve Stripe customer ID from Firestore
      const userDoc = await db.collection("users").doc(userId).get();
      const stripeCustomerId = userDoc.data()?.stripeCustomerId;

      if (!stripeCustomerId) {
        error(`Customer not found for user ${userId}`);
        throw new HttpsError("not-found", "Customer not found");
      }

      // Create portal session
      const session = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: "https://recapeps.fr/profil",
      });
      info(`Portal session created: ${session.id} ${session.url}`);
      return { url: session.url };
    } catch (err) {
      const e = err as Error;
      error("Error creating portal session:", e);
      throw new HttpsError("internal", "Internal server error");
    }
  }
);
