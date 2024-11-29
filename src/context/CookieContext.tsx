/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

import { getAnalytics, setAnalyticsCollectionEnabled } from "firebase/analytics";
import { app } from "@/utils/firebase";

type ConsentContextType = {
    consentGiven: boolean | null;
    setConsent: (consent: boolean) => void;
};

export const CookieContext = createContext<ConsentContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
    const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

    // Carregar consentimento dos cookies do `localStorage`
    useEffect(() => {
        const storedConsent = localStorage.getItem("consent");
        if (storedConsent !== null) {
            setConsentGiven(storedConsent === "true");
        }
    }, []);

    useEffect(() => {
        if (consentGiven !== null) {
            const analytics = getAnalytics(app);
            setAnalyticsCollectionEnabled(analytics, consentGiven);
            console.log(`Analytics ${consentGiven ? "enabled" : "disabled"}`);
        }
    }, [consentGiven]);

    const setConsent = (consent: boolean) => {
        setConsentGiven(consent);
        localStorage.setItem("consent", consent.toString());
    };

    return (
        <CookieContext.Provider value={{ consentGiven, setConsent }}>
            {children}
        </CookieContext.Provider>
    );
};

