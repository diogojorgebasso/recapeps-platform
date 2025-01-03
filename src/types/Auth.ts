import type { User } from "firebase/auth";

export type AuthContextProps = {
    firstName: string;
    secondName: string;
    uid: string;
    subscribed: boolean;
    isAuthenticated: boolean;
    isLoadedAuth: boolean;
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
    sendPasswordReset: (email: string) => Promise<void>;
    handleEmailChange: (currentPassword : string, email: string) => Promise<void>;
    updateUserName: (firstName: string, secondName:string) => Promise<void>;
    updateEmailNotificationPreference: (preference: boolean) => Promise<void>;
    isEmailNotificationEnabled: boolean;
    deleteUserAccount: (currentPassword : string) => Promise<void>;
};
