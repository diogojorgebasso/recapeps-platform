import { useContext } from "react";
import { TrackingConsentContext } from "./TrackingConsentProvider";

export function useTrackingConsent() {
    const ctx = useContext(TrackingConsentContext);
    if (!ctx) throw new Error('useCookieConsent must be used inside CookieProvider');
    return ctx;
};