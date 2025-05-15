import { Timestamp } from 'firebase/firestore';

export interface PushNotification {
    id: string;
    type: string;
    title: string;
    body: string;
    isRead: boolean;
    createdAt: Timestamp;
}
