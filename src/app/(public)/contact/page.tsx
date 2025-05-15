'use client';

import { useState, useEffect } from 'react';
import { useAuth } from "@/contexts/Auth";
import {
    Box,
    Button,
    Input,
    Textarea,
    Text,
    Fieldset,
    VStack,
    Field,
} from "@chakra-ui/react";
import { z } from "zod";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/clientApp";

// Define validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Adresse email invalide"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Page() {
    const { user } = useAuth();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    // Pre-fill form with user data if available
    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.displayName || '',
                email: user.email || ''
            }));
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setSubmitStatus(null);

        try {
            // Validate form data
            const validatedData = contactSchema.parse(formData);
            setIsLoading(true);

            // Add data to Firestore contacts collection
            const contactData = {
                ...validatedData,
                userId: user?.uid || null,
                createdAt: new Date()
            };

            await addDoc(collection(db, 'contacts'), contactData);

            // Reset form and show success message
            setFormData({
                name: user?.displayName || '',
                email: user?.email || '',
                message: ''
            });

            setSubmitStatus({
                type: 'success',
                message: 'Votre message a été envoyé avec succès!'
            });

        } catch (error) {
            if (error instanceof z.ZodError) {
                // Format Zod errors
                const fieldErrors: Record<string, string> = {};
                error.errors.forEach(err => {
                    const path = err.path[0] as string;
                    fieldErrors[path] = err.message;
                });
                setErrors(fieldErrors);
            } else {
                console.error("Error submitting contact form:", error);
                setSubmitStatus({
                    type: 'error',
                    message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minH="calc(100vh - 120px)"
                p={4}
            >
                <Box
                    maxW="lg"
                    w="full"
                    p={6}
                    borderRadius="lg"
                    shadow="md"
                    borderWidth="1px"
                >
                    <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
                        Contactez-nous
                    </Text>


                    <form onSubmit={handleSubmit}>
                        <Fieldset.Root>
                            <Fieldset.Content as={VStack} gap={4}>
                                <Field.Root>
                                    <Field.Label mb={2}>Nom</Field.Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Entrez votre nom"
                                        required
                                    />
                                    {errors.name && (
                                        <Field.ErrorText>{errors.name}</Field.ErrorText>
                                    )}
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label mb={2}>Email</Field.Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Entrez votre email"
                                        required
                                    />
                                    {errors.email && (
                                        <Field.ErrorText>{errors.email}</Field.ErrorText>
                                    )}
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label mb={2}>Message</Field.Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Entrez votre message"
                                        rows={4}
                                        required
                                    />
                                    {errors.message && (
                                        <Field.ErrorText>{errors.message}</Field.ErrorText>
                                    )}
                                </Field.Root>

                                <Button
                                    type="submit"
                                    colorPalette="orange"
                                    w="full"
                                    mt={4}
                                    loading={isLoading}
                                    disabled={isLoading}
                                >
                                    Envoyer le message
                                </Button>
                            </Fieldset.Content>
                        </Fieldset.Root>
                    </form>
                </Box>
            </Box>
        </>
    );
}
