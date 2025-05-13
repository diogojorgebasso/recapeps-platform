'use client';

import { Box, Flex, Heading, VStack, Spinner, Alert } from '@chakra-ui/react';
import { useAuth } from '@/contexts/Auth/useAuth';
import ProfilePhotoUploader from './components/ProfilePhotoUploader';
import ProfileDetailsForm from './components/ProfileDetailsForm';
import SubscriptionSection from './components/SubscriptionSection';
import EmailNotificationToggle from './components/EmailNotificationToggle';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const { user, pro } = useAuth();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user) {
            setError("Unable to load user profile. Please try again later.");
        }
    }, [user]);

    if (error || !user) return (
        <Alert.Root status="error">
            <Alert.Indicator />
            {error || "Authentication error. Please refresh the page or sign in again."}
        </Alert.Root>
    );

    return (
        <Box p={6}>
            <Heading size="lg" mb={6}>
                Mon profil
            </Heading>

            <Flex gap={10} align="flex-start" direction={{ base: "column", md: "row" }}>
                <VStack gap={4}>
                    <ProfilePhotoUploader />
                </VStack>

                <ProfileDetailsForm
                    defaultFirst={user.displayName?.split(' ')[0] ?? ''}
                    defaultLast={user.displayName?.split(' ').slice(1).join(' ') ?? ''}
                    defaultEmail={user.email ?? ''}
                />
            </Flex>

            <Box mt={8}>
                <Heading as="h3" size="md" mb={4}>
                    Préférences email
                </Heading>
                <EmailNotificationToggle />
            </Box>

            <Box mt={8}>
                <SubscriptionSection pro={pro} />
            </Box>
        </Box>
    );
}
