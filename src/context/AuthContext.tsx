/* eslint-disable react-refresh/only-export-components */
import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    updateEmail,
    verifyBeforeUpdateEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    deleteUser,
    linkWithCredential,
    signInAnonymously,
    onAuthStateChanged,
    User
} from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { AbsoluteCenter, Spinner } from "@chakra-ui/react";

interface AuthContextProps {
    currentUser: User | null;
    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    signUpWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<void>;
    signOut: () => Promise<void>;
    getUserToken: () => Promise<string>;
    handleRecoverPassword: (email: string) => Promise<void>;
    updatePhotoURLInContext: (newPhotoURL: string) => void;
    sendPasswordReset: (email: string) => Promise<void>;
    handleEmailChange: (currentPassword: string, email: string) => Promise<void>;
    updateUserName: (firstName: string, secondName: string) => Promise<void>;
    updateEmailNotificationPreference: (preference: boolean) => Promise<void>;
    deleteUserAccount: (currentPassword: string) => Promise<void>;
    upgradeFromAnonymous: (email: string, password: string) => Promise<User>;
};


export const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                setLoading(false);
            } else {
                // Caso não tenha user, faz login anônimo
                try {
                    await signInAnonymously(auth);
                } catch (err) {
                    console.error('Erro ao fazer login anônimo:', err);
                } finally {
                    setLoading(false);
                }
            }
        });

        // Cleanup
        return () => unsubscribe();
    }, []);

    async function upgradeFromAnonymous(email: string, password: string) {
        // user atual (possivelmente anônimo)
        const user = auth.currentUser;

        if (!user) {
            throw new Error("Nenhum usuário autenticado para fazer upgrade.");
        }

        // Cria credenciais
        const credential = EmailAuthProvider.credential(email, password);

        // Faz o link
        const result = await linkWithCredential(user, credential);
        // Agora o user não é mais anônimo
        setCurrentUser(result.user);

        return result.user;
    }

    const signUpWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        try {
            const currentUser = auth.currentUser;

            if (currentUser?.isAnonymous) {
                const credential = EmailAuthProvider.credential(email, password);
                const linked = await linkWithCredential(currentUser, credential);
                console.log("Anonymous account linked successfully!", linked);
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
            throw error;
        }
    }, []);

    const deleteUserAccount = async (currentPassword: string) => {
        console.log("Deleting user account...");
        try {
            if (currentUser) {
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                await reauthenticateWithCredential(currentUser, credential);
                await deleteUser(currentUser);
            }
        } catch (error) {
            console.error("Error deleting user account:", error);
        }
    }

    const handleEmailChange = async (currentPassword: string, newEmail: string) => {
        if (currentUser) {
            try {
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                await reauthenticateWithCredential(currentUser, credential);
                await verifyBeforeUpdateEmail(currentUser, newEmail);
                await updateEmail(currentUser, newEmail);
            } catch (error) {
                console.error("Erro ao atualizar email:", error);
            }
        }
    };

    const updateUserName = async (firstName: string, secondName: string) => {
        if (currentUser) {
            try {
                const userDocRef = doc(db, "users", currentUser.uid);
                await setDoc(userDocRef, { firstName, secondName }, { merge: true });
            } catch (error) {
                console.error("Error updating user name:", error);
            }
        }
    };


    const loginWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }, []);

    const loginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }, []);

    const updateEmailNotificationPreference = async (preference: boolean) => {
        try {
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, { emailNotifications: preference });
            console.log("Preferência de notificação atualizada com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar preferência de notificação:", error);
        }
    };

    const signOutFn = useCallback(async () => {
        await signOut(auth);
        window.location.reload();
    }, []);

    const handleRecoverPassword = useCallback(async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    }, []);

    const sendPasswordReset = useCallback(async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error("Error sending password reset email:", error);
        }
    }, []);

    const value = {
        currentUser,
        loginWithEmailAndPassword,
        loginWithGoogle,
        signUpWithEmailAndPassword,
        signOut: signOutFn,
        handleRecoverPassword,
        sendPasswordReset,
        handleEmailChange,
        updateUserName,
        updateEmailNotificationPreference,
        deleteUserAccount,
        upgradeFromAnonymous
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <AbsoluteCenter><Spinner>Loading...</Spinner></AbsoluteCenter>}
        </AuthContext.Provider>
    );
}
