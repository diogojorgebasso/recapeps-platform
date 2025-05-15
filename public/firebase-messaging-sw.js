importScripts('https://www.gstatic.com/firebasejs/11.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCXb49PmpcCpPCyXaUxCMJnpJpTs0t0nLI",
    authDomain: "recapeps-platform.firebaseapp.com",
    projectId: "recapeps-platform",
    storageBucket: "recapeps-platform.firebasestorage.app",
    messagingSenderId: "148248325935",
    appId: "1:148248325935:web:27093543499cf6a55b3bda",
    measurementId: "G-RK00EBVHZN"
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