"use client";

import { useState } from 'react';
import {
    Flex,
    Heading,
    Text,
    Input,
    Fieldset,
    Button,
    Field,
    Stack,
    Card,
} from "@chakra-ui/react";
import Link from 'next/link';
import { sendPasswordResetEmail } from "@/lib/firebase/auth";
import { z } from "zod";
import { useColorModeValue } from "@/components/ui/color-mode";

// Define the validation schema
const forgotPasswordSchema = z.object({
    email: z.string().email("Adresse email invalide")
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            // Validate email
            const validatedData = forgotPasswordSchema.parse({ email });
            setIsLoading(true);

            // Send password reset email
            await sendPasswordResetEmail(validatedData.email);
            setSuccess(true);
            // Clear the form after successful submission
            setEmail('');
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Handle validation errors
                setError(error.errors[0]?.message || "Email invalide");
            } else {
                // Handle other errors
                setError("Échec de l'envoi de l'email de réinitialisation. Veuillez réessayer.");
                console.error("Password reset error:", error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue("gray.50", "gray.800")}
            p={4}
        >
            <Card.Root width="sm" shadow="md">
                <Card.Header textAlign="center">
                    <Heading as="h2" size="lg">
                        Réinitialisation du mot de passe
                    </Heading>

                    <Text mt={2} fontSize="sm" color="gray.600">
                        {success
                            ? "Un email de réinitialisation a été envoyé."
                            : "Entrez votre email pour réinitialiser votre mot de passe"
                        }
                    </Text>
                </Card.Header>

                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            <Fieldset.Root>
                                <Field.Root required>
                                    <Field.Label>Email</Field.Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                    {error && (
                                        <Field.ErrorText>{error}</Field.ErrorText>
                                    )}
                                </Field.Root>
                            </Fieldset.Root>

                            <Button
                                type="submit"
                                colorPalette="blue"
                                w="full"
                                loading={isLoading}
                                disabled={isLoading}
                            >
                                Envoyer l&apos;email de réinitialisation
                            </Button>
                        </Stack>
                    </form>

                    <Text mt={4} fontSize="sm" textAlign="center">
                        Vous vous rappelez de votre mot de passe ?{" "}
                        <Link
                            href="/login"
                            color="blue.500"
                        >
                            Connectez-vous
                        </Link>
                    </Text>
                </Card.Body>
            </Card.Root>
        </Flex>
    );
}
