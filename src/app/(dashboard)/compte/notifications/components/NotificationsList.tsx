import { VStack } from '@chakra-ui/react';
import { PushNotification } from '@/types/PushNotification';
import NotificationItem from './NotificationItem';

interface NotificationsListProps {
    notifications: PushNotification[];
    userId: string;
}

export default function NotificationsList({ notifications, userId }: NotificationsListProps) {
    return (
        <VStack gap={4} align="stretch">
            {notifications.map(notification => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                    userId={userId}
                />
            ))}
        </VStack>
    );
}
