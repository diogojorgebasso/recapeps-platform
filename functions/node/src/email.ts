import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import MailService from "@sendgrid/mail";
import { getFirestore } from "firebase-admin/firestore";
import * as functions from 'firebase-functions/v1';

const db = getFirestore();
MailService.setApiKey(process.env.SENDGRID_API_KEY || "");

// Activate the retrie option automatically.
export const sendcontactemail = onDocumentCreated({
    document: "contact/{contactID}",
    serviceAccount: "send-contact-email-run@recapeps-test.iam.gserviceaccount.com"
},
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
            subject: "Confirmation de réception de votre message",
            text: `Bonjour ${userName},\n\nNous avons bien reçu votre message et vous remercions de nous avoir contactés.\nNotre équipe vous répondra dans les plus brefs délais.\n\nEn attendant, n'hésitez pas à consulter notre FAQ ou à nous recontacter si nécessaire.\n\nBien cordialement,\nL'équipe Recap'eps.`
        };

        try {
            if (userEmail) {
                await MailService.send(emailToUser);
            }
            logger.info("Emails enviados com sucesso para o contato e suporte.");
        } catch (error) {
            logger.error("Erro ao enviar emails via SendGrid:", error);
        }
    });

export const exportuserdata = onCall(
    {
        cors: ["https://recapeps.fr"],
        serviceAccount: "export-user-data-run@recapeps-test.iam.gserviceaccount.com",
        enforceAppCheck: true
    },
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
                subject: "Votre export de données Recap'eps",
                text: "Veuillez trouver ci-joint l'export de vos données Recap'eps.",
                html: `
                <p>Bonjour ${userData.profile.name || ""},</p>
                <p>Vous avez demandé un export de vos données personnelles sur Recap'eps.</p>
                <p>Vos données sont disponibles en pièce jointe de cet email.</p>
                <p>Cordialement,<br>L'équipe Recap'eps</p>`,
                attachments: [
                    {
                        filename: 'recapeps-data-export.json',
                        content: Buffer.from(JSON.stringify(userData, null, 2)).toString('base64'),
                        type: 'application/json',
                        disposition: 'attachment'
                    }
                ]
            };

            await MailService.send(emailData);
            logger.info(`Data export email sent to user ${userId} at ${userEmail}`);

            return { message: "Export request accepted and processing" };
        } catch (err) {
            const e = err as Error;
            logger.error("Error exporting user data:", e);
            throw new HttpsError("internal", "Failed to export user data");
        }
    }
);

export const sendwelcomeemail = functions.runWith({
    serviceAccount: "send-welcome-email-run@recapeps-test.iam.gserviceaccount.com"
}).auth.user().onCreate(async (user) => {
    try {
        const { email } = user;

        if (!email) {
            throw new HttpsError('invalid-argument', 'Email is required');
        }

        const msg = {
            to: email,
            from: 'no-reply@recapeps.fr',
            subject: "Bienvenue sur Recap'eps! ",
            text: `Bonjour,\n\nBienvenue sur Recap'eps ! Nous sommes ravis de vous compter parmi nos utilisateurs.\n\nN'hésitez pas à explorer toutes les fonctionnalités de notre plateforme.\n\nCordialement,\nL'équipe Recap'eps`,
            html: `
          <p>Bonjour,</p>
          <p>Bienvenue sur <strong>Recap'eps</strong> !</p>
          <p>Nous sommes ravis de vous compter parmi nos utilisateurs.</p>
          <p>N'hésitez pas à explorer toutes les fonctionnalités de notre plateforme.</p>
          <p>Cordialement,<br>L'équipe RecapEPS</p>
        `
        };

        await MailService.send(msg);
        logger.info(`Welcome email sent to ${email}`);

        return { success: true };
    } catch (error) {
        logger.error('Error sending welcome email:', error);
        throw new functions.https.HttpsError('internal', 'Error sending email');
    }
});
