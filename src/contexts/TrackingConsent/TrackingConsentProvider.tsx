'use client';

import { ReactNode, createContext, useState, useEffect, useContext } from 'react';
import { firebaseApp } from '@/lib/firebase/clientApp';

type TrackingConsentCtx = { consentGiven: boolean | null; setConsent: (v: boolean) => void };

export const TrackingConsentContext = createContext<TrackingConsentCtx | undefined>(undefined);

export function TrackingConsentProvider({ children }: { children: ReactNode }) {
    const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
    useEffect(() => {
        const stored = window.localStorage.getItem('consent');
        if (stored !== null) setConsentGiven(stored === 'true');
    }, []);

    useEffect(() => {
        if (consentGiven === null) return;
        import('firebase/analytics').then(({ getAnalytics, setAnalyticsCollectionEnabled }) => {
            const analytics = getAnalytics(firebaseApp);
            setAnalyticsCollectionEnabled(analytics, consentGiven);
        });
        import('firebase/performance').then(({ getPerformance }) => {
            getPerformance(firebaseApp);
        });
    }, [consentGiven]);

    const setConsent = (v: boolean) => {
        setConsentGiven(v);
        window.localStorage.setItem('consent', String(v));
    };

    return (
        <TrackingConsentContext.Provider value={{ consentGiven, setConsent }}>
            {children}
        </TrackingConsentContext.Provider>
    );
};
