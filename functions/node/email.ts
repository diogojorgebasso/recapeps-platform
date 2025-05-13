import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export const sendContactEmail = onDocumentCreated("contact/{contactID}",
    async (event) => {
        const snapshot = event.data;

        if (!snapshot) {
            logger.error("No data associated with the event");
            return;
        }

        const data = snapshot.data();
        const userEmail = data?.email;
        const userName = data?.name || "";

        const emailToUser = {
            to: userEmail,
            from: "no-reply@recapeps.fr",
            cc: "support@recapeps.fr",
            subject: `Confirmation de réception de votre message`,
            text: `Bonjour ${userName},\n\nNous avons bien reçu votre message, nous y répondrons dans les meilleurs délais.\n\nMerci pour votre confiance,\nL'équipe Recapeps.`
        };

        try {
            if (userEmail) {
                await sgMail.send(emailToUser);
            }
            logger.info("Emails enviados com sucesso para o contato e suporte.");
        } catch (error) {
            logger.error("Erro ao enviar emails via SendGrid:", error);
        }
    });

interface ExportUserDataRequest {}

export const exportUserData = onCall<ExportUserDataRequest>(
    { cors: ["https://recapeps.fr"] },
    async (request) => {
        const userId = request.auth?.uid;
        
        if (!userId) {
            throw new HttpsError("unauthenticated", "Authentication required");
        }
        
        try {
            logger.info(`Exporting data for user ${userId}`);

            const userDoc = await db.collection("users").doc(userId).get();
            if (!userDoc.exists) {
                throw new HttpsError("not-found", "User not found");
            }

            const userData: Record<string, any> = {};
            const userEmail = userDoc.data()?.email;

            if (!userEmail) {
                throw new HttpsError("failed-precondition", "User email not found");
            }

            userData.profile = userDoc.data();

            // Subscriptions
            const subscriptionsSnapshot = await db.collection("users").doc(userId).collection("subscriptions").get();
            if (!subscriptionsSnapshot.empty) {
                userData.subscriptions = subscriptionsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            }

            // Quizzes
            const quizzesSnapshot = await db.collection("users").doc(userId).collection("quizzes").get();
            if (!quizzesSnapshot.empty) {
                userData.quizzes = quizzesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            }

            // Prepare email
            const emailData = {
                to: userEmail,
                from: "no-reply@recapeps.fr",
                subject: "Votre export de données RecapEPS",
                text: "Veuillez trouver ci-joint l'export de vos données RecapEPS.",
                html: `
                <p>Bonjour ${userData.profile.name || ""},</p>
                <p>Vous avez demandé un export de vos données personnelles sur RecapEPS.</p>
                <p>Vos données sont disponibles en pièce jointe à cet email.</p>
                <p>Cordialement,<br>L'équipe RecapEPS</p>`,
                attachments: [
                    {
                        filename: 'recapeps-data-export.json',
                        content: Buffer.from(JSON.stringify(userData, null, 2)).toString('base64'),
                        type: 'application/json',
                        disposition: 'attachment'
                    }
                ]
            };

            await sgMail.send(emailData);
            logger.info(`Data export email sent to user ${userId} at ${userEmail}`);

            return { message: "Export request accepted and processing" };
        } catch (err) {
            const e = err as Error;
            logger.error("Error exporting user data:", e);
            throw new HttpsError("internal", "Failed to export user data");
        }
    }
);
