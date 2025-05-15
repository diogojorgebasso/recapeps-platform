"use client";
import { useState } from 'react';
import { Box, HStack, Heading, Text, Button } from '@chakra-ui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/clientApp';
import { Notification } from '@/types/Notification';

interface NotificationItemProps {
    notification: Notification;
    userId: string;
}

export default function NotificationItem({ notification, userId }: NotificationItemProps) {
    const { id, isRead, title, body, createdAt } = notification;
    const [read, setRead] = useState(isRead);

    async function handleMarkAsRead() {
        try {
            const notificationRef = doc(db, 'users', userId, 'notifications', id);
            await updateDoc(notificationRef, { isRead: true });
            setRead(true);
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    }

    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg={read ? 'gray.50' : 'white'}
            borderColor={read ? 'gray.200' : 'blue.200'}
        >
            <HStack justify="space-between" mb={2}>
                <Heading size="md">{title}</Heading>
            </HStack>
            <Text fontSize="sm" color="gray.600">
                {body}
            </Text>
            <Text fontSize="xs" color="gray.500" mt={2}>
                Reçu le {createdAt.toDate().toLocaleString()}
            </Text>

            {!read && (
                <Button
                    size="sm"
                    mt={3}
                    colorPalette="blue"
                    onClick={handleMarkAsRead}
                >
                    Marquer comme lu
                </Button>
            )}
        </Box>
    );
}
