import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

// Export all functions from the modules
export * from "./auth";
export * from "./stripe";
export * from "./email";
export * from "./transcribe";
