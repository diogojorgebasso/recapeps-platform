const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

admin.initializeApp(); // Initialize the Firebase Admin SDK
const db = admin.firestore();

exports.saveUserToFirestore = functions.auth.user().onCreate(async (user) => {
    try {
        // User properties from the Authentication object
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

        // Save user to Firestore in the "users" collection
        await db.collection("users").doc(uid).set(userData);

        // Optionally, set custom claims for the user if they are an admin
        if (role === "admin") {
            await admin.auth().setCustomUserClaims(uid, { role });
            logger.info(`Custom claims set for admin user ${uid}`);
        }

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