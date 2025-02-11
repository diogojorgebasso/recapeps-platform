import { useState } from "react";
import { db } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
    Box,
    Button,
    Input,
    Textarea,
    Text,
    Fieldset,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "contact"), formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting message:", error);
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={4}
        >
            <Box
                maxW="lg"
                w="full"
                p={6}
                bg={useColorModeValue("white", "gray.900")}
                borderRadius="lg"
                shadow="md"
            >
                <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
                    Contactez-nous
                </Text>

                {submitted && (
                    <Text mb={6} color="green.500" textAlign="center">
                        Votre message a été envoyé avec succès !
                    </Text>
                )}

                <form onSubmit={handleSubmit}>
                    <Fieldset.Root>
                        <Fieldset.Content>
                            <Field label="Nom">
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Entrez votre nom"
                                />
                            </Field>

                            <Field label="Email">
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Entrez votre email"
                                />
                            </Field>

                            <Field label="message">
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Entrez votre message"
                                    rows={4}
                                />
                            </Field>

                            <Button
                                type="submit"
                                colorPalette="orange.500"
                                w="full"
                                disabled={!formData.name || !formData.email || !formData.message}
                            >
                                Envoyer le Message
                            </Button>

                        </Fieldset.Content>

                    </Fieldset.Root>


                </form>
            </Box>
        </Box>
    );
}
