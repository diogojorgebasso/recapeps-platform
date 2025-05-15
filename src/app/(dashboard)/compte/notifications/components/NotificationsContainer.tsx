"use client";
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/clientApp';
import { Notification } from '@/types/Notification';
import { useAuth } from '@/contexts/Auth';
import NotificationsList from './NotificationsList';
import NotificationsEmptyState from './NotificationsEmptyState';

export default function NotificationsContainer() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        async function fetchNotifications() {
            if (!user) return;

            try {
                const notificationsRef = collection(db, 'users', user.uid, 'notifications');
                const q = query(notificationsRef, orderBy('createdAt', 'desc'));
                const snapshot = await getDocs(q);

                const fetchedNotifications = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Notification, 'id'>),
                }));

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

    return notifications.length === 0 ?
        <NotificationsEmptyState /> :
        <NotificationsList notifications={notifications} userId={user.uid} />;
}
