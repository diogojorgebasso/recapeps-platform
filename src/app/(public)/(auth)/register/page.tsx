"use client";

import { useState } from 'react';
import {
    Flex,
    Card,
    Heading,
    Text,
    Stack,
    Input,
    Fieldset,
    Field,
    Button,
    HStack,
    Separator,
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import { PasswordInput } from "@/components/ui/password-input";
import { registerWithEmailAndPassword, signUpWithGoogle } from "@/lib/firebase/auth";
import { z } from "zod";

// Define validation schema
const registerSchema = z.object({
    email: z.string().email("Adresse email invalide"),
    password: z.string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une lettre majuscule")
        .regex(/[a-z]/, "Le mot de passe doit contenir au moins une lettre minuscule")
        .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
    acceptTerms: z.boolean().refine(val => val === true, {
        message: "Vous devez accepter la politique de confidentialité"
    })
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
    const [formData, setFormData] = useState<RegisterFormData>({
        email: "",
        password: "",
        acceptTerms: false
    });

    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Clear error for this field when user changes it
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleCheckboxChange = (details: { checked: boolean | 'indeterminate' }) => {
        const checked = details.checked === true; // Ensure it's a boolean
        setFormData(prev => ({
            ...prev,
            acceptTerms: checked
        }));

        if (errors.acceptTerms) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.acceptTerms;
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGeneralError(null);
        setErrors({});

        try {
            // Validate form data
            const validatedData = registerSchema.parse(formData);
            setIsLoading(true);

            // Register the user
            await registerWithEmailAndPassword(
                validatedData.email,
                validatedData.password
            );
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Format Zod errors
                const fieldErrors: Record<string, string[]> = {};
                error.errors.forEach(err => {
                    const path = err.path[0] as string;
                    if (!fieldErrors[path]) {
                        fieldErrors[path] = [];
                    }
                    fieldErrors[path].push(err.message);
                });
                setErrors(fieldErrors);
            } else {
                // Handle Firebase errors
                setGeneralError("Échec de l'inscription. Veuillez réessayer.");
                console.error("Registration error:", error);
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
                        Inscription
                    </Heading>
                    <Text mt={2} fontSize="sm" color="gray.600">
                        Veuillez compléter les informations ci-dessous pour créer votre compte.
                    </Text>
                </Card.Header>

                <Card.Body>
                    <Stack gap={4}>
                        <form onSubmit={handleSubmit}>
                            <Fieldset.Root>
                                <Field.Root>
                                    <Field.Label>Email</Field.Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                    {errors.email && errors.email.map((error, index) => (
                                        <Field.ErrorText key={index}>{error}</Field.ErrorText>
                                    ))}
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
                                    {errors.password && errors.password.map((error, index) => (
                                        <Field.ErrorText key={index}>- {error}</Field.ErrorText>
                                    ))}
                                </Field.Root>

                                <Field.Root required>
                                    <Checkbox
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onCheckedChange={handleCheckboxChange}
                                    >
                                        J&apos;ai lu et j&apos;accepte la <Link href="/legal/politique-confidentialite">Politique de Confidentialité</Link>
                                    </Checkbox>
                                    {errors.acceptTerms && errors.acceptTerms.map((error, index) => (
                                        <Field.ErrorText key={index}>{error}</Field.ErrorText>
                                    ))}
                                </Field.Root>
                            </Fieldset.Root>

                            {generalError && (
                                <Text color="red.500" fontSize="sm">{generalError}</Text>
                            )}

                            <Button
                                type="submit"
                                colorPalette="blue"
                                w="full"
                                loading={isLoading}
                                disabled={isLoading}
                            >
                                Créer un compte
                            </Button>
                        </form>
                    </Stack>
                    <HStack>
                        <Separator flex="1" />
                        <Text flexShrink="0">ou</Text>
                        <Separator flex="1" />
                    </HStack>

                    <Button
                        variant="outline"
                        w="full"
                        mt={4}
                        onClick={() => signUpWithGoogle()}
                        disabled={isLoading}
                    >
                        <FaGoogle />
                        <Text ml={2}>S&apos;inscrire avec Google</Text>
                    </Button>

                    <Text mt={4} fontSize="sm" textAlign="center">
                        Vous avez déjà un compte ?{" "}
                        <Link href="/login">
                            Connectez-vous
                        </Link>
                    </Text>
                </Card.Body>
            </Card.Root>
        </Flex>
    );
}
