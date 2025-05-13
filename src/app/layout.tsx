import { Metadata } from 'next';
import { AuthProvider } from '@/contexts/Auth/AuthProvider';
import { Provider } from '@/components/ui/provider';
import { ReactNode } from 'react';
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { PushNotificationsProvider } from "@/contexts/PushNotifications";
import { TrackingConsentProvider } from '@/contexts/TrackingConsent';

export const metadata: Metadata = {
  title: "Recap'eps",
  description: "Recap'eps est un outil de révision imparable pour réussir les concours du CAPEPS. Que ce soit grâce à nos fiches de révisions thématiques, quiz, flashcards ou entraînements pour les oraux, réviser n’a jamais été aussi facile.",
};

export const dynamic = "force-dynamic"; // Force server component to be dynamic to avoid caching issues with Firebase auth

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { user } = await getAuthenticatedAppForUser();

  return (
    <html suppressHydrationWarning lang="fr">
      <body>
        <AuthProvider initialUser={user}>
          <PushNotificationsProvider>
            <TrackingConsentProvider>
              <Provider>
                {children}
              </Provider>
            </TrackingConsentProvider>
          </PushNotificationsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
