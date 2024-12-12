const admin = require("firebase-admin");

admin.initializeApp();

const { createStripeCheckoutSession } = require("./createStripeCheckoutSession");
const { saveRoleToFirestore, deleteUserDocument } = require("./handleUserToFirestore");	

module.exports = {
  createStripeCheckoutSession,
  saveRoleToFirestore,
  deleteUserDocument,
};
