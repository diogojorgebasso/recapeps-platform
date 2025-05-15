"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
    Flex,
    Card,
    Heading,
    Text,
    Input,
    Fieldset,
    Button,
    Field,
    Stack,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { PasswordInput } from "@/components/ui/password-input";
import { useColorModeValue } from "@/components/ui/color-mode";
import { signInWithGoogle, signInWithEmail } from "@/lib/firebase/auth";
import { z } from "zod";

// Define the validation schema
const loginSchema = z.object({
    email: z.string().email("Adresse email invalide"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function ClientComponent() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof LoginFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGeneralError(null);

        try {
            // Validate form data
            const validatedData = loginSchema.parse(formData);
            setIsLoading(true);

            await signInWithEmail(validatedData.email, validatedData.password);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Handle validation errors
                const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
                error.errors.forEach(err => {
                    if (err.path) {
                        fieldErrors[err.path[0] as keyof LoginFormData] = err.message;
                    }
                });
                setErrors(fieldErrors);
            } else {
                // Handle authentication errors
                setGeneralError("Échec de connexion. Vérifiez vos identifiants.");
                console.error("Login error:", error);
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
                        Connexion
                    </Heading>
                    <Text mt={2} fontSize="sm" color="gray.600">
                        Entrez vos identifiants pour vous connecter
                    </Text>
                </Card.Header>

                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            <Fieldset.Root>
                                <Field.Root>
                                    <Field.Label>Email</Field.Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="exemple@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && (
                                        <Fieldset.ErrorText>{errors.email}</Fieldset.ErrorText>
                                    )}
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Mot de passe</Field.Label>
                                    <PasswordInput
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Entrez votre mot de passe"
                                        required
                                    />
                                    {errors.password && (
                                        <Fieldset.ErrorText>{errors.password}</Fieldset.ErrorText>
                                    )}
                                </Field.Root>
                            </Fieldset.Root>

                            {generalError && (
                                <Text color="red.500" fontSize="sm">{generalError}</Text>
                            )}

                            <Link
                                href="/forgot-password"
                                color="blue.500"
                            >
                                Mot de passe oublié ?
                            </Link>

                            <Button
                                type="submit"
                                colorPalette="blue"
                                w="full"
                                loading={isLoading}
                                disabled={isLoading}
                            >
                                Se connecter
                            </Button>
                        </Stack>
                    </form>

                    <Button
                        variant="outline"
                        w="full"
                        mt={4}
                        onClick={() => signInWithGoogle()}
                        disabled={isLoading}
                    >
                        <FaGoogle />
                        <Text ml={2}>Se connecter avec Google</Text>
                    </Button>

                    <Text mt={4} fontSize="sm" textAlign="center">
                        Vous n&apos;avez pas encore de compte ?{" "}
                        <Link
                            href="/register"
                            color="blue.500"
                        >
                            Inscrivez-vous
                        </Link>
                    </Text>
                </Card.Body>
            </Card.Root>
        </Flex>
    );
}