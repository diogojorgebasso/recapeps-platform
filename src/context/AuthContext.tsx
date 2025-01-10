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
    updateEmail,
    verifyBeforeUpdateEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    deleteUser,
} from "firebase/auth";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { auth } from "@/utils/firebase";
import { doc, setDoc, getDoc, collection, getDocs, query, where, orderBy, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { AuthContextProps } from "@/types/Auth";

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [firstName, setfirstName] = useState("Étudiant");
    const [secondName, setsecondName] = useState("Votre Prénom");
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
    const [isLoadedAuth, setIsLoadedAuth] = useState(false);
    const [photoURL, setPhotoURL] = useState("/avatar.svg");
    const [role, setRole] = useState("user");
    const [subscribed, setSubscribed] = useState(false);
    const [currentUser, setCurrentUser] = useState<User>();
    const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] = useState(true);

    const sendPasswordReset = useCallback(async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error("Error sending password reset email:", error);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user && user.uid) {
                setCurrentUser(user);
                setUid(user.uid);
                setEmail(user.email!);

                if (!isLoadedAuth) {
                    await fetchUserData(user.uid);
                    setIsLoadedAuth(true);
                }
            } else {
                setCurrentUser(undefined);
                setUid("");
                setEmail("");
                setIsLoadedAuth(false);
            }
        });
        return unsubscribe;
    }, []);

    const deleteUserAccount = async (currentPassword: string) => {
        console.log("Deleting user account...");
        try {
            if (currentUser) {
                const credential = EmailAuthProvider.credential(email, currentPassword);
                await reauthenticateWithCredential(currentUser, credential);
                await deleteUser(currentUser);
            }
        } catch (error) {
            console.error("Error deleting user account:", error);
        }
    }

    const fetchUserData = async (uid: string) => {
        console.log("Fetching user data...");
        try {
            if (isLoadedAuth) {
                console.log("Dados do usuário já carregados");
                return;
            }
            const userDoc = await getDoc(doc(db, "users", uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData) {
                    setIsEmailNotificationEnabled(userData.emailNotifications);
                    setfirstName(userData.firstName);
                    setsecondName(userData.secondName);
                    if (userData.photoURL != null) {
                        setPhotoURL(userData.photoURL);
                    }
                    setRole(userData.role);
                    await checkUserSubscription(uid);
                }
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

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

    const handleEmailChange = async (currentPassword: string, newEmail: string) => {
        if (currentUser) {
            try {
                const credential = EmailAuthProvider.credential(email, currentPassword);
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
                setfirstName(firstName);
                setsecondName(secondName);
            } catch (error) {
                console.error("Error updating user name:", error);
            }
        }
    };

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

    const updateEmailNotificationPreference = async (preference: boolean) => {
        try {
            const userRef = doc(db, "users", uid);
            await updateDoc(userRef, { emailNotifications: preference });
            console.log("Preferência de notificação atualizada com sucesso.");
        } catch (error) {
            console.error("Erro ao atualizar preferência de notificação:", error);
        }
    };

    const signUpWithEmailAndPassword = useCallback(async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                firstName: user.displayName || null,
                photoURL: user.photoURL || null,
                emailNotifications: true,
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
    }, []);

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
                firstName,
                secondName,
                uid,
                subscribed,
                isAuthenticated,
                isLoadedAuth,
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
                sendPasswordReset,
                handleEmailChange,
                updateUserName,
                updateEmailNotificationPreference,
                isEmailNotificationEnabled,
                deleteUserAccount,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
