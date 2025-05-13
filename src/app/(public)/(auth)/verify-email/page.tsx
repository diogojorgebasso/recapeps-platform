"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendEmailVerification, User as FirebaseUser } from "firebase/auth"; // Import User as FirebaseUser
import { auth } from "@/lib/firebase/clientApp";
import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Alert,
    AlertTitle,
    AlertDescription,
    Spinner,
    List,
} from "@chakra-ui/react";

export default function VerifyEmail() {
    const [user, setUser] = useState<FirebaseUser | null>(null); // Typed user state
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setLoading(false);

            if (!currentUser) {
                router.push('/');
                return;
            }

            if (currentUser.emailVerified) {
                router.push('/');
                return;
            }

            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [router]);

    const handleSendVerificationEmail = async () => {
        if (!user) return;
        setIsSending(true);
        setMessage('');
        try {
            await sendEmailVerification(user);
            setMessage("Un email de vérifiaction vient d'être envoyé! Vérifiez votre messagerie."); // Keep for non-toast display if needed
        } catch (error: any) {
            setMessage(`Une erreur est survenue lros de la verification de votre email: ${error.message}`);
        } finally {
            setIsSending(false);
        }
    };

    const checkVerificationStatus = async () => {
        if (!user) return;
        setIsChecking(true);
        setMessage('');
        try {
            await user.reload();
            // It's important to get the fresh user instance from auth.currentUser
            const refreshedUser = auth.currentUser;

            if (refreshedUser && refreshedUser.emailVerified) {
                setMessage('Votre email a bien été vérifié! Redirection...');
                setTimeout(() => router.push('/'), 1500);
            } else {
                setMessage("Votre email n'a pas encore été vérifié. Veuillez cliquer sur le lien de vérification dans votre messagerie.");
            }
        } catch (error: any) {
            setMessage(`Une erreur est survenue lors de la vérification: ${error.message}`);
        } finally {
            setIsChecking(false);
        }
    };

    if (loading) {
        return (
            <Container centerContent py={10}>
                <Spinner size="xl" />
                <Text mt={4}>Chargement...</Text>
            </Container>
        );
    }

    if (!user) {
        // This case should ideally be handled by the redirect in useEffect,
        // but as a fallback or if loading is very fast:
        return (
            <Container centerContent py={10}>
                <Text>Redirection...</Text>
            </Container>
        );
    }

    return (
        <Container maxW="container.md" py={10} textAlign="center">
            <VStack gap={6} align="stretch">
                <Heading as="h1" size="xl">
                    Verification de votre email requise
                </Heading>
                <Text>
                    Votre adresse email doit être vérifiée pour pouvoir accéder librement à nos services.
                </Text>
                <Text>
                    Un email de confirmation a été envoyé à : <Text as="strong">{user.email}</Text>
                </Text>

                <HStack gap={4} justifyContent="center" my={8}>
                    <Button
                        onClick={handleSendVerificationEmail}
                        colorPalette="blue"
                        loading={isSending}
                        loadingText="Envoi en cours..."
                    >
                        Renvoyer un email de confirmation
                    </Button>
                    <Button
                        onClick={checkVerificationStatus}
                        colorPalette="green"
                        loading={isChecking}
                        loadingText="Verification..."
                    >
                        J'ai confirmé mon email
                    </Button>
                </HStack>

                {message && (
                    <Alert.Root status={message.toLowerCase().includes('error') ? 'error' : 'info'} borderRadius="md">
                        <Alert.Indicator />
                        <Box flex="1">
                            <AlertTitle>
                                {message.toLowerCase().includes('error') ? 'Error!' : 'Notification'}
                            </AlertTitle>
                            <AlertDescription display="block">
                                {message}
                            </AlertDescription>
                        </Box>
                    </Alert.Root>
                )}

                <Box textAlign="left" p={4} borderWidth="1px" borderRadius="md">
                    <Heading as="h2" size="md" mb={3}>
                        Instructions:
                    </Heading>
                    <List.Root gap={2}>
                        <List.Item>Cliquez sur le lien de confirmation dans votre messagerie (vérifiez vos spams).</List.Item>
                        <List.Item>Après confirmation, revenez sur cette page et cliquez sur le bouton "J'ai confirmé mon email" ci-dessus.</List.Item>
                        <List.Item>Si vous ne recevez pas d'email ou que le lien a expiré, cliquez sur "Renvoyer un email de confirmation".</List.Item>
                    </List.Root>
                </Box>
            </VStack>
        </Container>
    );
}