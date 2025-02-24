import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyCXb49PmpcCpPCyXaUxCMJnpJpTs0t0nLI",
  authDomain: "recapeps-platform.firebaseapp.com",
  projectId: "recapeps-platform",
  storageBucket: "recapeps-platform.firebasestorage.app",
  messagingSenderId: "148248325935",
  appId: "1:148248325935:web:27093543499cf6a55b3bda",
  measurementId: "G-RK00EBVHZN",
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);


// Initialize App Check only on the client side
const initAppCheck = async () => {
  const { initializeAppCheck, ReCaptchaV3Provider } = await import(
    "firebase/app-check"
  );
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6Le-6H8qAAAAABnX3YE60B2yDwojG0nZAEd0a7ne"
      ),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (e) {
    console.error(e);
  }
};

// Only run in browser
if (typeof document !== "undefined") {
  initAppCheck();
  getPerformance(app);
}
