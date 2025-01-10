const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

const db = admin.firestore();

exports.saveRoleToFirestore = functions.auth.user().onCreate(async (user) => {
    try {
        const { uid, email, displayName, photoURL } = user;

        const role = email && email.endsWith("@recapeps.com") ? "admin" : "user";

        const userData = {
            uid: uid,
            email: email || null,
            name: displayName || null,
            photoURL: photoURL || null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            role: role, 
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
        const userUid = user.uid;
        const userDocRef = db.collection("users").doc(userUid);
        const userFolderRef = admin.storage().bucket().file(`user/${userUid}`);

        try {
            // Delete user document from Firestore
            await userDocRef.delete();
            logger.info(`User ${userUid} deleted from Firestore successfully.`);

            // Delete user folder from Storage
            await userFolderRef.delete();
            logger.info(`User folder user/${userUid} deleted from Storage successfully.`);
        } catch (error) {
            logger.error("Error deleting user data:", error);
        }
    });
