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
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { AbsoluteCenter, Spinner, Text } from "@chakra-ui/react";

export interface ExtendedUser extends User {
    firstName?: string;
    secondName?: string;
    tourEnabled?: boolean;
    emailNotifications?: boolean;
}

interface AuthContextProps {
    currentUser: ExtendedUser | null;
    isAuthenticated: boolean;
    isEmailNotificationEnabled: boolean;
    getUserToken: () => Promise<string>;
    setCurrentUser: React.Dispatch<React.SetStateAction<ExtendedUser | null>>;
    loginWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    handleRecoverPassword: (email: string) => Promise<void>;
    sendPasswordReset: (email: string) => Promise<void>;
    handleEmailChange: (currentPassword: string, email: string) => Promise<void>;
    updateUserName: (firstName: string, secondName: string) => Promise<void>;
    updateEmailNotificationPreference: (preference: boolean) => Promise<void>;
    handleTourPreference: (enableTour: boolean) => Promise<void>;
    upgradeFromAnonymous: (email: string, password: string) => Promise<User>;
    deleteUserAccount: (currentPassword: string) => Promise<void>;
    simpleLogin: (email: string, password: string) => Promise<User>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<ExtendedUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEmailNotificationEnabled] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);
                const userData = userSnap.exists() ? userSnap.data() : {};

                setCurrentUser({
                    ...user,
                    firstName: userData?.firstName ?? "Étudiant",
                    secondName: userData?.secondName ?? "Recap'eps",
                    tourEnabled: userData?.tourEnabled ?? true,
                    emailNotifications: userData?.emailNotifications ?? true,
                } as ExtendedUser);
                setIsAuthenticated(!user.isAnonymous);
            } else {
                try {
                    await signInAnonymously(auth);
                } catch (err) {
                    console.error('Erro ao fazer login anônimo:', err);
                } finally {
                    setCurrentUser(null);
                    setIsAuthenticated(false);
                }
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const upgradeFromAnonymous = async (email: string, password: string) => {
        const user = auth.currentUser;
        if (!user) throw new Error("No user is currently signed in.");
        const credential = EmailAuthProvider.credential(email, password);
        const result = await linkWithCredential(user, credential);
        setCurrentUser(result.user as ExtendedUser);
        return result.user;
    };

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
            throw error; // rethrow the error to propagate it to the caller
        }
    };

    const handleTourPreference = async (enableTour: boolean) => {
        try {
            console.log("Updating tour preference...", enableTour);
            if (!currentUser) return;
            const userRef = doc(db, "users", currentUser.uid);
            await updateDoc(userRef, { tourEnabled: enableTour });
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

    const loginWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        const user = auth.currentUser;
        if (user?.isAnonymous) {
            await signInWithPopup(auth, provider);
        } else {
            await signInWithPopup(auth, provider);
        }
    }, []);

    async function simpleLogin(email: string, password: string) {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(result.user as ExtendedUser);
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
            localStorage.removeItem('user-preferences');
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

    const value: AuthContextProps = {
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
            {!loading ? children : (
                <AbsoluteCenter>
                    <Spinner size="xl" />
                    <Text fontSize="5xl">Chargement&hellip;</Text>
                </AbsoluteCenter>
            )}
        </AuthContext.Provider>
    );
}
