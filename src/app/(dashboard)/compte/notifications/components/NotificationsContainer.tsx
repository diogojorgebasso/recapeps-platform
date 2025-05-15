"use client";
import { Box, Text, Progress, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, doc, setDoc } from 'firebase/firestore';
import { db, functions } from '@/lib/firebase/clientApp';
import { PushNotification } from '@/types/PushNotification';
import { useAuth } from '@/contexts/Auth';
import NotificationsList from './NotificationsList';
import NotificationsEmptyState from './NotificationsEmptyState';
import { isPWA, DeviceTypes, useDevice } from '@/contexts/PushNotifications/useDevice';
import { useContext } from 'react';
import { PushNotificationsContext } from '@/contexts/PushNotifications';
import { getToken } from 'firebase/messaging';
import { httpsCallable } from 'firebase/functions';

export default function NotificationsContainer() {
    const [notifications, setNotifications] = useState<PushNotification[]>([]); const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const [progress, setProgress] = useState(0);
    const device = useDevice();
    const messaging = useContext(PushNotificationsContext);
    const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleTokenSubmit = async () => {
        try {
            if (device === DeviceTypes.IOS && !isPWA())
                throw new Error(
                    'In IPhone you must install the app first, by clicking on Share button in browser and selecting “Add to Home Screen"'
                );
            if (messaging) {
                setLoading(true);
                if (Notification.permission !== "granted") {
                    setProgress(10);
                    const result = await Notification.requestPermission();
                    setProgress(20);
                    if (result !== "granted")
                        throw new Error("Notifications are not allowed.");
                }

                if (!("serviceWorker" in navigator)) {
                    console.error("Service Workers unavailable");
                }

                let registration = await navigator.serviceWorker.getRegistration("/");
                setProgress(40);
                if (!registration) {
                    registration = await navigator.serviceWorker.register(
                        "/firebase-messaging-sw.js",
                        {
                            scope: "/",
                        }
                    );
                } setProgress(60);

                await navigator.serviceWorker.ready;
                setProgress(80);
                const firebaseToken = await getToken(messaging, {
                    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
                    serviceWorkerRegistration: registration,
                });
                //enviar para o backend Firestore
                if (firebaseToken) {
                    // Call the Firebase Cloud Function to save the token
                    const saveFcmToken = httpsCallable(functions, 'savefcmtoken');
                    try {
                        const result = await saveFcmToken({ token: firebaseToken });
                        console.log('FCM token saved successfully:', result.data);
                        setSubscriptionStatus('success');
                    } catch (err) {
                        console.error('Error saving FCM token:', err);
                        setSubscriptionStatus('error');
                        throw new Error('Failed to save notification token');
                    }
                }
                setProgress(100);
                setProgress(0);
            } else {
                throw new Error("Messaging not initialized");
            }
        } catch (err: any) {
            console.log(err.message);
            setProgress(0);
            setSubscriptionStatus('error');
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchNotifications() {
            if (!user) return;

            try {
                const notificationsRef = collection(db, 'users', user.uid, 'notifications');
                const q = query(notificationsRef, orderBy('createdAt', 'desc'));
                const snapshot = await getDocs(q);

                const fetchedNotifications = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        type: data.type,
                        isRead: data.isRead,
                        createdAt: data.createdAt,
                        ...data
                    } as PushNotification;
                });

                setNotifications(fetchedNotifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNotifications();
    }, [user]);

    if (!user) {
        return (
            <Box p={4}>
                <Text>Veuillez vous connecter pour accéder à vos notifications.</Text>
            </Box>
        );
    }

    if (loading) {
        return <Box p={4}><Text>Notifications en cours de chargement...</Text></Box>;
    }

    return (
        <Box>            <Button
            onClick={handleTokenSubmit}
            colorScheme={subscriptionStatus === 'error' ? 'red' : subscriptionStatus === 'success' ? 'green' : 'teal'}
            fontWeight="bold"
            py={4}
            px={8}
            borderRadius="full"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            _hover={{
                bg: subscriptionStatus === 'error' ? 'red.600' : subscriptionStatus === 'success' ? 'green.600' : 'teal.600',
                transform: "translateY(-2px)",
                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            }}
            _active={{
                bg: subscriptionStatus === 'error' ? 'red.700' : subscriptionStatus === 'success' ? 'green.700' : 'teal.700',
                transform: "translateY(0)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            transition="all 0.2s ease-in-out"
            disabled={loading || subscriptionStatus === 'success'}
            position="relative"
            overflow="hidden"
        >
            {loading ? (
                <>
                    <Text>Inscription en cours...</Text>
                    <Progress.Root value={progress} >
                        <Progress.Track>
                            <Progress.Range />
                        </Progress.Track>
                    </Progress.Root>
                </>
            ) : subscriptionStatus === 'success' ? (
                <Text>Vous êtes abonné aux notifications</Text>
            ) : subscriptionStatus === 'error' ? (
                <Text>Échec de l&apos;inscription - Réessayer</Text>
            ) : (
                <Text>S&apos;abonner aux notifications</Text>
            )}
        </Button>
            {notifications.length === 0 ?
                <NotificationsEmptyState />
                :
                <NotificationsList notifications={notifications} userId={user.uid} />
            }
        </Box>
    );
}
