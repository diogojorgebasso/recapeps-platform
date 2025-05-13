"use client";
import React, { createContext, useEffect, useState } from "react";
import { messaging } from "@/lib/firebase/clientApp";
import { onMessage, Messaging } from "firebase/messaging";
import { ReactNode } from "react";

export const PushNotificationsContext = createContext<Messaging | null>(null);

export function PushNotificationsProvider({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    const [messagingInstance, setMessagingInstance] = useState<Messaging | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        try {
            if (
                isClient &&
                "serviceWorker" in navigator &&
                "Notification" in window
            ) {
                // Initialize messaging and store the instance
                messaging().then(instance => {
                    if (!instance) return;
                    setMessagingInstance(instance);

                    const unsubscribe = onMessage(instance, async (payload) => {
                        if (Notification.permission === "granted" && payload.notification) {
                            const url = payload.data?.url || "/";
                            const registration = await navigator.serviceWorker.ready;

                            registration.showNotification(payload.notification?.title || "noveau message", {
                                body: payload.notification?.body,
                                icon: "/logo.svg",
                                data: { url },
                            });
                        }
                    });

                    return () => unsubscribe();
                });
            } else {
                console.log("Push notifications not supported");
            }
        } catch (error) {
            console.log("Error initializing Firebase:", error);
        }
    }, [isClient]);

    if (!isClient) {
        return <>{children}</>;
    }

    return (
        <PushNotificationsContext.Provider value={messagingInstance}>
            {children}
        </PushNotificationsContext.Provider>
    );
}
