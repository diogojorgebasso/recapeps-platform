import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  NextOrObserver,
  User
} from "firebase/auth";

import { auth } from "@/lib/firebase/clientApp";
import { redirect } from "next/navigation";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export function onIdTokenChanged(cb: NextOrObserver<User>) {
  return _onIdTokenChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // If the user's email is not verified, send a verification email
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      console.log("Verification email sent to", user.email);
    }

    redirect("/parcours/dashboard");
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
}

export async function signUpWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user.emailVerified) {
      await sendEmailVerification(user);
      console.log("Verification email sent to", user.email); // TODO : Better error handling.
    }

    redirect("/parcours/dashboard");
  } catch (error) {
    console.error("Error signing up with Google", error);
    throw error;
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}

// Helper function to send verification email
export async function sendVerificationEmail(user: User | null) {
  if (!user) {
    user = auth.currentUser;
  }

  if (!user) {
    throw new Error("No user is currently signed in");
  }

  try {
    await sendEmailVerification(user);
    return true;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}

// Function to sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    redirect("/parcours/dashboard");

  } catch (error) {
    console.error("Error signing in with email and password", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Function to register a new user with email and password
export async function registerWithEmailAndPassword(
  email: string,
  password: string,
  displayName?: string
): Promise<import("firebase/auth").User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update profile with display name if provided
    if (displayName) {
      await updateProfile(user, { displayName });
    }

    // Send email verification
    await sendEmailVerification(user);
    console.log("Verification email sent to", user.email);
    redirect("/verify-email");

  } catch (error) {
    console.error("Error registering user with email and password", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Function to send a password reset email
export async function sendPasswordResetEmail(email: string): Promise<void> {
  try {
    await firebaseSendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to", email);
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
