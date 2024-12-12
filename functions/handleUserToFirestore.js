const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

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
