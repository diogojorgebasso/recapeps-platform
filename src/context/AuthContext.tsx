import {
    sendPasswordResetEmail,
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
    User,
    signInWithEmailAndPassword,
    getIdToken,
} from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { AbsoluteCenter, Spinner, Text } from "@chakra-ui/react";

interface AuthContextProps {
    getUserToken: () => Promise<string>;
    setCurrentUser:
    React.Dispatch<React.SetStateAction<User | null>>;
    isAuthenticated: boolean;
    isEmailNotificationEnabled: boolean;
    currentUser: User | null;
    loginWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    handleRecoverPassword: (email: string) => Promise<void>;
    sendPasswordReset: (email: string) => Promise<void>;
    handleEmailChange: (currentPassword: string, email: string) => Promise<void>;
    updateUserName: (firstName: string, secondName: string) => Promise<void>;
    updateEmailNotificationPreference: (preference: boolean) => Promise<void>;
    deleteUserAccount: (currentPassword: string) => Promise<void>;
    upgradeFromAnonymous: (email: string, password: string) => Promise<User>;
    simpleLogin: (email: string, password: string) => Promise<User>;
    handleTourPreference: (enableTour: boolean) => Promise<void>;
};


export const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEmailNotificationEnabled,] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                // Define isAuthenticated como true somente se o usuário não for anônimo
                setIsAuthenticated(!user.isAnonymous);
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
        return () => unsubscribe();
    }, []);

    async function upgradeFromAnonymous(email: string, password: string) {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("Nenhum usuário autenticado para fazer upgrade.");
        }
        const credential = EmailAuthProvider.credential(email, password);
        const result = await linkWithCredential(user, credential);
        setCurrentUser(result.user);
        return result.user;
    }

    const deleteUserAccount = async (currentPassword: string) => {
        console.log("Deleting user account...");
        try {
            if (currentUser && currentUser.email) {
                const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
                await reauthenticateWithCredential(currentUser, credential);
                await deleteUser(currentUser);
            }
        } catch (error) {
            console.error("Error deleting user account:", error);
        }
    }

    /**
     * 
     * @param enableTour 
     * @returns 
     */
    const handleTourPreference = async (enableTour: boolean) => {
        try {
            console.log("Updating tour preference...", enableTour);
            if (!currentUser) return;
            const userRef = doc(db, "users", currentUser.uid);
            await updateDoc(userRef, { tourEnabled: enableTour });
            // Update the local user object with the new tour preference
            setCurrentUser({ ...(currentUser as any), tourEnabled: enableTour });
        } catch (error) {
            console.error("Error updating tour preference:", error);
        }
    };

    const handleEmailChange = async (currentPassword: string, newEmail: string) => {
        if (!currentUser || !currentUser.email) return;
        try {
            const credential = EmailAuthProvider.credential(
                currentUser.email,
                currentPassword
            );
            await reauthenticateWithCredential(currentUser, credential);
            await verifyBeforeUpdateEmail(currentUser, newEmail);
            await updateEmail(currentUser, newEmail);
        } catch (error) {
            console.error("Erro ao atualizar email:", error);
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


    /**
       * Login com Google (faz link automático se o user for anônimo,
       * ou simplesmente "login" se não for).
       */
    const loginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        const user = auth.currentUser;
        if (user?.isAnonymous) {
            // Se é anônimo, linkamos
            await signInWithPopup(auth, provider);
        } else {
            // Se não é anônimo, também funciona, mas vira "multi-provider".
            await signInWithPopup(auth, provider);
        }
    }, []);

    /**
     * Função responsável por logar o usuário.
     * @param email Identificador do Usuário
     * @param password Senha de Login do Usuário
     * @returns 
     */
    async function simpleLogin(email: string, password: string) {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(result.user);
            setIsAuthenticated(true);
            return result.user;
        } catch (error) {
            const authError = error as { code?: string; message: string };
            if (authError.code === "auth/user-not-found") {
                throw new Error("Usuário não encontrado. Verifique seu e-mail.");
            } else if (authError.code === "auth/wrong-password") {
                throw new Error("Senha incorreta. Tente novamente.");
            } else {
                console.error("Erro ao realizar login:", error);
                throw new Error("Erro ao fazer login. Tente novamente.");
            }
        }
    }


    const updateEmailNotificationPreference = async (preference: boolean) => {
        try {
            if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                await updateDoc(userRef, { emailNotifications: preference });
            }
            console.log("Preferência de notificação atualizada com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar preferência de notificação:", error);
        }
    };

    const signOutFn = useCallback(async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
            setIsAuthenticated(false);
            // Clean up any user-specific data from localStorage if needed
            localStorage.removeItem('user-preferences');

            // Use navigate instead of window.location for better React integration
            window.location.href = '/';
        } catch (error) {
            console.error("Error signing out:", error);
            throw error;
        }
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

    const getUserToken = useCallback(async () => {
        if (auth.currentUser) {
            return await getIdToken(auth.currentUser);
        }
        return "";
    }, []);

    const value = {
        currentUser,
        isAuthenticated,
        loginWithGoogle,
        signOut: signOutFn,
        handleRecoverPassword,
        sendPasswordReset,
        handleEmailChange,
        updateUserName,
        updateEmailNotificationPreference,
        deleteUserAccount,
        upgradeFromAnonymous,
        simpleLogin,
        isEmailNotificationEnabled,
        setCurrentUser,
        getUserToken,
        handleTourPreference
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <AbsoluteCenter><Spinner size="xl" /><Text fontSize="5xl">Chargement&hellip;</Text></AbsoluteCenter>}
        </AuthContext.Provider>
    );
}
