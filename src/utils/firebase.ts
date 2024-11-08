
import { getStorage, ref } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAV4wwPmsqU2Aj7M8rwzt_MCxA4vY7gd6s",
    authDomain: "recapeps.firebaseapp.com",
    projectId: "recapeps",
    storageBucket: "recapeps.firebasestorage.app",
    messagingSenderId: "177310005845",
    appId: "1:177310005845:web:859576c075ad9309fc32dc",
    measurementId: "G-70E4DQ0DP1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const storageRef = ref(storage);