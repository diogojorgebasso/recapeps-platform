import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";

import { Alert } from "@/components/ui/alert"

import { Link } from "react-router";

export default function ForgottenPassword() {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");
    const { sendPasswordReset } = useAuth();

    const handleSendPasswordReset = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Veuillez entrer une adresse e-mail valide.");
            return;
        }
        setError("");
        await sendPasswordReset(email);
        setEmailSent(true);
    };

    return (
        <Box minH="100vh">
            <Center h="100vh">
                <Container
                    maxW="sm"
                    boxShadow="lg"
                    borderRadius="lg"
                    p={8}
                >
                    <VStack gap={6}>
                        <Heading as="h2" size="lg">
                            Mot de passe oublié ?
                        </Heading>
                        {emailSent ? (
                            <Text textAlign="center">
                                Un lien de réinitialisation a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception.
                            </Text>
                        ) : (
                            <>
                                <Text textAlign="center">
                                    Entrez votre adresse e-mail et nous vous enverrons un lien pour
                                    réinitialiser votre mot de passe.
                                </Text>
                                {error && (
                                    <Alert status="error">
                                        {error}
                                    </Alert>
                                )}
                                <Input
                                    placeholder="Entrez votre adresse e-mail"
                                    type="email"
                                    autoComplete="email"
                                    size="md"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button width="full" onClick={handleSendPasswordReset}>
                                    Envoyer
                                </Button>
                            </>
                        )}
                        <Button variant="outline" colorScheme="blue" size="sm">
                            <Link to="/login">Retour à la page de connexion</Link>
                        </Button>
                    </VStack>
                </Container>
            </Center>
        </Box>
    );
}
