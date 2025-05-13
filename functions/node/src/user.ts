import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const auth = getAuth();
const db = getFirestore();

export const handleEmailChange = onCall<
    { newEmail: string }
>(
    {
        enforceAppCheck: true,
        cors: "https://recapeps.fr"
    },
    async (req) => {
        const uid = req.auth?.uid;
        const newEmail = req.data.newEmail?.trim();

        if (!uid) throw new HttpsError('unauthenticated', 'Usuário não autenticado');
        if (!newEmail) throw new HttpsError('invalid-argument', 'Novo email é obrigatório');

        try {
            await auth.updateUser(uid, { email: newEmail, emailVerified: false });
            await auth.generateEmailVerificationLink(newEmail);

            logger.info(`[handleEmailChange] Email atualizado para ${uid}`);
            return { success: true, message: 'Email atualizado. Verifique sua nova caixa de entrada.' };
        } catch (error: any) {
            logger.error('[handleEmailChange] Erro:', error);
            return { success: false, error: error.message, code: error.code || 'unknown-error' };
        }
    }
);


export const updateUserName = onCall<
    { firstName: string; lastName: string }
>(
    {
        enforceAppCheck: true,
        cors: "https://recapeps.fr"
    },
    async (req) => {
        const uid = req.auth?.uid;
        const firstName = req.data.firstName?.trim();
        const lastName = req.data.lastName?.trim();

        if (!uid) throw new HttpsError('unauthenticated', 'Usuário não autenticado');
        if (!firstName || !lastName) throw new HttpsError('invalid-argument', 'Nome e sobrenome são obrigatórios');

        const displayName = `${firstName} ${lastName}`;

        try {
            await auth.updateUser(uid, { displayName });

            await db.collection('users').doc(uid).update({
                displayName,
                firstName,
                lastName,
                updatedAt: new Date(),
            });

            logger.info(`[updateUserName] Nome atualizado para ${uid}: ${displayName}`);
            return { success: true, displayName };
        } catch (error: any) {
            logger.error('[updateUserName] Erro:', error);
            return { success: false, error: error.message, code: error.code || 'unknown-error' };
        }
    }
);
