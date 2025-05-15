'use client';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getMessaging, isSupported } from "firebase/messaging";
import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider,
    CustomProvider,
} from 'firebase/app-check'

const firebaseConfig = {
    apiKey: "AIzaSyCQL9kH3r-y4Q4PtzQ_t9lBJl5J3zuty7k",
    authDomain: "recapeps-test.firebaseapp.com",
    projectId: "recapeps-test",
    storageBucket: "recapeps-test.firebasestorage.app",
    messagingSenderId: "298375526115",
    appId: "1:298375526115:web:784cb51da316177ad637d6",
    measurementId: "G-9PK8PPVBSE"
};

export const firebaseApp = initializeApp(firebaseConfig);
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    try {
        initializeAppCheck(firebaseApp, {
            provider: new ReCaptchaEnterpriseProvider('6Lco8f4qAAAAAPFNsctWY6ASBbDBnWZ50v5jF9eP'),
            isTokenAutoRefreshEnabled: true
        });

        console.log("Firebase App Check initialized.");
    } catch (error) {
        console.error("Error initializing Firebase App Check:", error);
    }
}
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const functions = getFunctions(firebaseApp, "europe-west1");

export const messaging = async () => {
    if (typeof window === 'undefined') return null;          // SSR guard
    if (!(await isSupported())) return null;                 // Browser capability guard
    return getMessaging(firebaseApp);
};

