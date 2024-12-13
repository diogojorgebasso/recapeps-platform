const admin = require("firebase-admin");

admin.initializeApp();

const { createStripeCheckoutSession } = require("./createStripeCheckoutSession");
const { saveRoleToFirestore, deleteUserDocument } = require("./handleUserToFirestore");	
const {helloFlow} = require("./genai");

module.exports = {
  createStripeCheckoutSession,
  saveRoleToFirestore,
  deleteUserDocument,
  helloFlow
};
