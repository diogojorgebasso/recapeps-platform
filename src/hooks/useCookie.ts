import { CookieContext } from "@/context/CookieContext";
import { useContext } from "react";

export function useCookie() {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error("useConsent must be used within a ConsentProvider");
    }
    return context;
};