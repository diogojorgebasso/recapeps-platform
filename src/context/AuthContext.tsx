import { getIdToken, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";


type AuthContextProps = {
    isAuthenticated: boolean;
    isLoadingAuth: boolean;
    email: string;
    currentUser: User | null;
    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>,
    getUserToken: () => Promise<string>,
    handleRecoverPassword: (email: string) => Promise<void>,
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (next => {
            setIsLoadingAuth(false);
            if (next && next.uid) {
                setUid(next.uid);
                setEmail(next.email ?? '');
            } else {
                setUid('');
            }
        }));
        return unsubscribe;
    }, []);

    const loginWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }, []);

    const signOutFn = useCallback(() => signOut(auth), []);

    const handleRecoverPassword = async (email: string) => {
        await sendPasswordResetEmail(auth, email);

    };

    const getUserToken = useCallback(async () => {
        if (auth.currentUser) {
            return await getIdToken(auth.currentUser);
        }
        return '';
    }, []);

    const isAuthenticated = useMemo(() => Boolean(uid), [uid]);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoadingAuth,
            email,
            currentUser: auth.currentUser,
            loginWithEmailAndPassword,
            signOut: signOutFn,
            getUserToken,
            handleRecoverPassword,

        }}>
            {children}
        </AuthContext.Provider>
    );
}