const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

admin.initializeApp(); // Initialize the Firebase Admin SDK
const db = admin.firestore();

exports.saveUserToFirestore = functions.auth.user().onCreate(async (user) => {
    try {
        // User properties from the Authentication object
        const { uid, email, displayName, photoURL } = user;

        const userData = {
            uid: uid,
            email: email || null,
            name: displayName || null,
            photoURL: photoURL || null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            role: "user", // Default role, customize as needed
        };

        // Save user to Firestore in the "users" collection
        return db.collection("users").doc(uid).set(userData).then(() => {
            logger.info(`User ${uid} saved to Firestore successfully.`);
        });
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