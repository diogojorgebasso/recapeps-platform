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
    User
} from "firebase/auth";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";
import { doc, setDoc, getDoc, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Firestore instance

type AuthContextProps = {
    name: string;
    uid: string;
    subscribed: boolean;
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
    updatePhotoURLInContext: (newPhotoURL: string) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [name] = useState("Étudiant");
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [photoURL, setPhotoURL] = useState("/avatar.svg");
    const [role, setRole] = useState("user");
    const [subscribed, setSubscribed] = useState(false); // State to track subscription status

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user && user.uid) {
                setUid(user.uid);
                setEmail(user.email!);
                await fetchUserPhoto(user.uid);
                await fetchUserRole(user.uid);
                await checkUserSubscription(user.uid);
                setIsLoadingAuth(false);
            }
        });
        return unsubscribe;
    });

    const fetchUserPhoto = async (uid: string) => {
        try {
            const userDoc = await getDoc(doc(db, "users", uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData.photoURL) {
                    setPhotoURL(userData.photoURL);
                }
            }
        } catch (error) {
            console.error("Error fetching user photo:", error);
        }
    }


    const fetchUserRole = async (uid: string) => {
        try {
            const userDoc = await getDoc(doc(db, "users", uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData.role && typeof userData.role === "string") {
                    setRole(userData.role);
                }
            }
        } catch (error) {
            console.error("Error fetching user role:", error);
        }
    };

    const checkUserSubscription = useCallback(async (userId: string) => {
        try {
            const paymentsRef = collection(db, `users/${userId}/payments`);

            const q = query(
                paymentsRef,
                where("status", "==", "active"),
                orderBy("createdAt", "desc")
            );

            const querySnapshot = await getDocs(q);

            console.log(querySnapshot)

            if (!querySnapshot.empty) {
                console.log("Active subscription found");
                setSubscribed(true); // Subscription exists
            } else {
                console.log("No active subscription found");
                setSubscribed(false); // No active subscription
            }
        } catch (error) {
            console.error("Error checking user subscription:", error);
            setSubscribed(false); // Assume no subscription on error
        }
    }, []);


    const updatePhotoURLInContext = (newPhotoURL: string) => {
        setPhotoURL(newPhotoURL);
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

    const signOutFn = useCallback(async () => {
        await signOut(auth);
        window.location.reload();
    }
        , []);

    const handleRecoverPassword = useCallback(async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    }, []);

    const getUserToken = useCallback(async () => {
        if (auth.currentUser) {
            return await getIdToken(auth.currentUser);
        }
        return "";
    }, []);

    const isAuthenticated = useMemo(() => Boolean(uid), [uid]);

    return (
        <AuthContext.Provider
            value={{
                name,
                uid,
                subscribed,
                isAuthenticated,
                isLoadingAuth,
                email,
                photoURL,
                currentUser: auth.currentUser,
                role,
                loginWithEmailAndPassword,
                loginWithGoogle,
                signUpWithEmailAndPassword,
                signOut: signOutFn,
                getUserToken,
                handleRecoverPassword,
                updatePhotoURLInContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
