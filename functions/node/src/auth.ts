import { error, info } from "firebase-functions/logger"
import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import Stripe from "stripe";
import * as functions from 'firebase-functions/v1';

const db = getFirestore();
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined in environment variables.");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const saveusertofirestore = functions.runWith({
    serviceAccount: "save-user-to-firestore-run@recapeps-test.iam.gserviceaccount.com",
    ingressSettings: "ALLOW_INTERNAL_ONLY"
})
    .auth.user().onCreate(async (user) => {
        try {
            const { uid, email, displayName, photoURL } = user;

            const userData = {
                uid,
                email: email || null,
                name: displayName || null,
                photoURL: photoURL || null,
                emailNotifications: true,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            };

            await db.collection("users").doc(uid).set(userData);
            info(`User ${uid} saved to Firestore successfully.`);
        } catch (err) {
            error("Error saving user to Firestore:", err);
        }
    });

export const deleteuserdocument = functions.runWith({
    serviceAccount: "delete-user-document-run@recapeps-test.iam.gserviceaccount.com",
    ingressSettings: "ALLOW_INTERNAL_ONLY"
})
    .auth.user().onDelete(async (user) => {
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
                            await stripe.subscriptions.cancel(subscription.id);
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
