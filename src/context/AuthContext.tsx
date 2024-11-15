import {
    getIdToken,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    User,
} from "firebase/auth";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";

type AuthContextProps = {
    isAuthenticated: boolean;
    isLoadingAuth: boolean;
    email: string;
    photoURL: string;
    currentUser: User | null;
    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    getUserToken: () => Promise<string>;
    handleRecoverPassword: (email: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoadingAuth(false);
            if (user && user.uid) {
                setUid(user.uid);
                setEmail(user.email ?? "");
                setPhotoURL(user.photoURL ?? "");
            } else {
                setUid("");
            }
        });
        return unsubscribe;
    }, []);

    // Login com email e senha
    const loginWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }, []);

    // Login com Google
    const loginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }, []);

    // Logout
    const signOutFn = useCallback(() => signOut(auth), []);

    // Recuperar senha
    const handleRecoverPassword = useCallback(async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    }, []);

    // Obter token do usuário autenticado
    const getUserToken = useCallback(async () => {
        if (auth.currentUser) {
            return await getIdToken(auth.currentUser);
        }
        return "";
    }, []);

    // Verificar se o usuário está autenticado
    const isAuthenticated = useMemo(() => Boolean(uid), [uid]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoadingAuth,
                email,
                photoURL,
                currentUser: auth.currentUser,
                loginWithEmailAndPassword,
                loginWithGoogle,
                signOut: signOutFn,
                getUserToken,
                handleRecoverPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
