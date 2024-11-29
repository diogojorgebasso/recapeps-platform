/* eslint-disable react-refresh/only-export-components */
import {
    getIdToken,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    User,
} from "firebase/auth";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Firestore instance

type AuthContextProps = {
    uid: string;
    isAuthenticated: boolean;
    isLoadingAuth: boolean;
    email: string;
    photoURL: string;
    currentUser: User | null;
    role: string;
    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    getUserToken: () => Promise<string>;
    handleRecoverPassword: (email: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [photoURL, setPhotoURL] = useState("/avatar.svg");
    const [role, setRole] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setIsLoadingAuth(false);
            if (user && user.uid) {
                setUid(user.uid);
                setEmail(user.email!);
                if (user.photoURL) {
                    setPhotoURL(user.photoURL);
                }
                await fetchUserRole(user); // Fetch the user's role
            } else {
                setUid("");
                setRole("user");
            }
        });
        return unsubscribe;
    }, []);

    const fetchUserRole = async (user: User) => {
        try {
            const idTokenResult = await user.getIdTokenResult();
            if (idTokenResult.claims.role && typeof idTokenResult.claims.role === "string") {
                setRole(idTokenResult.claims.role);
            }
        } catch (error) {
            console.error("Error fetching user role:", error);
        }
    };

    const loginWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }, []);

    const loginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }, []);

    const signUpWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;

            // Save the user to Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName || null,
                photoURL: user.photoURL || null,
                createdAt: new Date().toISOString(),
            });
        } catch (error) {
            console.error("Error during sign-up:", error);
            throw error;
        }
    }, []);

    const signOutFn = useCallback(() => signOut(auth), []);

    const handleRecoverPassword = useCallback(async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    }, []);

    // Get user token
    const getUserToken = useCallback(async () => {
        if (auth.currentUser) {
            return await getIdToken(auth.currentUser);
        }
        return "";
    }, []);

    // Check if user is authenticated
    const isAuthenticated = useMemo(() => Boolean(uid), [uid]);

    return (
        <AuthContext.Provider
            value={{
                uid,
                isAuthenticated,
                isLoadingAuth,
                email,
                photoURL,
                currentUser: auth.currentUser,
                role, // Provide role in the context
                loginWithEmailAndPassword,
                loginWithGoogle,
                signUpWithEmailAndPassword, // Add sign-up functionality
                signOut: signOutFn,
                getUserToken,
                handleRecoverPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
