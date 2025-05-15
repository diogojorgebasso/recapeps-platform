import { onCall, HttpsError } from "firebase-functions/v2/https";
import { FieldValue } from "firebase-admin/firestore";
import { info, error } from "firebase-functions/logger";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();

export const savefcmtoken = onCall(
    {
        cors: "https://recapeps.fr",
        enforceAppCheck: true,
    },
    async (request) => {
        const userId = request.auth?.uid;
        const { token } = request.data;

        if (!userId) {
            throw new HttpsError("unauthenticated", "Authentication required.");
        }

        if (!token || typeof token !== 'string') {
            throw new HttpsError("invalid-argument", "Valid FCM token is required.");
        }

        try {
            const userRef = db.collection("users").doc(userId);

            await userRef.set(
                {
                    fcmTokens: FieldValue.arrayUnion(token),
                    lastTokenUpdate: FieldValue.serverTimestamp(), // Optional: track updates
                },
                { merge: true }
            );

            info(`FCM token saved/updated for user ${userId}.`);
            return { success: true };
        } catch (err) {
            const e = err as Error;
            error(`Error saving FCM token for user ${userId}:`, e);
            throw new HttpsError("internal", "Failed to save FCM token.", e.message);
        }
    }
);
