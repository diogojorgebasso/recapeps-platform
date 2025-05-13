import { error, info } from "firebase-functions/logger"
import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import Stripe from "stripe";

const db = getFirestore();
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined in environment variables.");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const saveRoleToFirestore = functions.auth.user().onCreate(async (event) => {
    const user = event.data;
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
        info(`User ${uid} saved to Firestore successfully.`);

        await admin.auth().setCustomUserClaims(uid, { role });
        info(`Role ${role} saved to user ${uid} successfully.`);
    } catch (err) {
        const error = err as Error;
        error("Error saving user to Firestore:", error);
    }
});

export const deleteUserDocument = functions.auth.user().onDelete(async (event) => {
    const user = event.data;
    console.log("Deleting user data:", user.uid);
    const userUid = user.uid;
    const userDocRef = db.collection("users").doc(userUid);

    try {
        const docSnapshot = await userDocRef.get();

        // Stripe deletion logic
        if (docSnapshot.exists) {
            if (docSnapshot.data()?.stripeCustomerId) {
                const stripeCustomerId = docSnapshot.data()?.stripeCustomerId;
                const subscriptions = await stripe.subscriptions.list({
                    customer: stripeCustomerId,
                    status: "all",
                });
                for (let subscription of subscriptions.data) {
                    if (subscription.status !== "canceled") {
                        await stripe.subscriptions.del(subscription.id);
                        info(
                            `Cancelled subscription ${subscription.id} for user ${userUid}.`
                        );
                    }
                }
                await stripe.customers.del(stripeCustomerId);
                info(
                    `Stripe customer ${stripeCustomerId} deleted for user ${userUid}.`
                );
            }
            await userDocRef.delete();
            info(`User ${userUid} deleted from Firestore successfully.`);
        } else {
            info(`No Stripe customer ID found for user ${userUid}.`);
        }

        const userFolderRef = admin.storage().bucket().file(`user/${userUid}`);
        const [exists] = await userFolderRef.exists();
        if (exists) {
            await userFolderRef.delete();
            info(
                `User folder user/${userUid} deleted from Storage successfully.`
            );
        }
    } catch (err) {
        const err2 = err as Error;
        error("Error deleting user data:", err2);
    }
});
