
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCXb49PmpcCpPCyXaUxCMJnpJpTs0t0nLI",
    authDomain: "recapeps-platform.firebaseapp.com",
    projectId: "recapeps-platform",
    storageBucket: "recapeps-platform.firebasestorage.app",
    messagingSenderId: "148248325935",
    appId: "1:148248325935:web:27093543499cf6a55b3bda",
    measurementId: "G-RK00EBVHZN"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
