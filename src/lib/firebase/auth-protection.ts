"use server";

import { redirect } from "next/navigation";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";

export async function requireServerAuth() {
    const { user, isPro } = await getAuthenticatedAppForUser();

    if (!user) {
        redirect("/login");
    }

    if (!user.emailVerified) {
        // TODO : Study more about the ActionCode.
        redirect("/verify-email");
    }

    return { user, isPro };
}
