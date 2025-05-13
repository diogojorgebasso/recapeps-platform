// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";
import { initializeServerApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXb49PmpcCpPCyXaUxCMJnpJpTs0t0nLI",
    authDomain: "recapeps-platform.firebaseapp.com",
    projectId: "recapeps-platform",
    storageBucket: "recapeps-platform.firebasestorage.app",
    messagingSenderId: "148248325935",
    appId: "1:148248325935:web:27093543499cf6a55b3bda",
    measurementId: "G-RK00EBVHZN"
};

export async function getAuthenticatedAppForUser() {
    const authIdToken = (await cookies()).get("__session")?.value;

    const firebaseServerApp = initializeServerApp(
        initializeApp(firebaseConfig),
        {
            authIdToken
        }
    );

    const auth = getAuth(firebaseServerApp);
    await auth.authStateReady();

    const user = auth.currentUser;
    let isPro = false;

    if (authIdToken)
        try {
            // Simple JWT decoding (tokens have 3 parts separated by dots)
            const parts = authIdToken.split('.');
            if (parts.length === 3) {
                const payload = parts[1];
                const decoded = Buffer.from(payload, 'base64').toString();
                const claims = JSON.parse(decoded);
                isPro = claims.pro === true;
            }
        } catch (error) {
            console.error("Error decoding JWT token:", error);
        }

    return { firebaseServerApp, user, isPro };
}