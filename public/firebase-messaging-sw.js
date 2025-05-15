importScripts('https://www.gstatic.com/firebasejs/11.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCQL9kH3r-y4Q4PtzQ_t9lBJl5J3zuty7k",
    authDomain: "recapeps-test.firebaseapp.com",
    projectId: "recapeps-test",
    storageBucket: "recapeps-test.firebasestorage.app",
    messagingSenderId: "298375526115",
    appId: "1:298375526115:web:784cb51da316177ad637d6",
    measurementId: "G-9PK8PPVBSE"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(messaging, async (payload) => {
    const { notification, data } = payload;
    const notificationOptions = {
        body: notification?.body,
        icon: notification?.icon || "/logo.svg", // Default icon
        data: { url: data?.url || "/" }, // Store URL in notification data
    };

    await self.registration.showNotification(
        payload.notification.title,
        notificationOptions
    );
});

self.addEventListener("install", (event) => {
    console.log("[Firebase SW] Installing...");
    event.waitUntil(self.skipWaiting()); // Force the new SW to activate immediately
});

self.addEventListener("activate", (event) => {
    console.log("[Firebase SW] Activating...");
    event.waitUntil(
        self.clients.claim() // Take control over all open pages
    );
});

self.addEventListener("notificationclick", (event) => {
    console.log("[Firebase SW] Notification Clicked:", event);
    event.notification.close();

    const url = event.notification.data?.url;
    if (url) {
        event.waitUntil(
            clients
                .matchAll({ type: "window", includeUncontrolled: true })
                .then((clientList) => {
                    for (const client of clientList) {
                        if (client.url === url && "focus" in client) {
                            return client.focus();
                        }
                    }
                    if (clients.openWindow) {
                        return clients.openWindow(url);
                    }
                })
        );
    }
});