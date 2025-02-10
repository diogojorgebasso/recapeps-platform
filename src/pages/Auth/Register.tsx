import { useState, useEffect } from "react";
import {
    Flex,
    Card,
    Heading,
    Text,
    Stack,
    Input,
    Link as ChakraLink,
    Fieldset,
    Field
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { useColorModeValue } from "@/components/ui/color-mode";
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        upgradeFromAnonymous,
        loginWithGoogle,
        isAuthenticated
    } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const handleSignUp = async () => {
        setError(null);
        setIsSubmitting(true);
        try {
            await upgradeFromAnonymous(email, password);
            navigate("/dashboard");
        } catch (error) {
            setError((error as Error).message);
            console.error("Erreur lors de l'inscription :", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleSignUp = async () => {
        setError(null);
        setIsSubmitting(true);
        try {
            await loginWithGoogle();
            ("Connexion avec Google réussie !");
            navigate("/dashboard");
        } catch (error) {
            setError("Erreur lors de la connexion avec Google. Veuillez réessayer.");
            console.error("Erreur lors de la connexion avec Google :", (error as Error).message);
        } finally {
            setIsSubmitting(false);
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
                        Créez un compte en remplissant les informations ci-dessous.
                    </Text>
                </Card.Header>

                <Card.Body>
                    <Stack gap={4}>
                        <Fieldset.Root>
                            <Field.Root required>
                                <Field.Label>Email</Field.Label>
                                <Input
                                    type="email"
                                    placeholder="exemple@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Field.Root>
                            <PasswordInput
                                placeholder="Entrez votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <PasswordStrengthMeter value={(password.length / 4) + 1} />
                            <Field.Root required >
                                <Field.Label>Conditions générales</Field.Label>
                                <Checkbox defaultChecked>
                                    J’accepte les Conditions générales
                                </Checkbox>
                            </Field.Root>
                        </Fieldset.Root>

                        {error && <Text color="red.500">{error}</Text>}


                        <Button
                            colorScheme="blue"
                            w="full"
                            onClick={handleSignUp}
                            loading={isSubmitting}
                        >
                            S&apos;inscrire
                        </Button>


                        <Button
                            variant="outline"
                            colorScheme="red"
                            w="full"
                            onClick={handleGoogleSignUp}
                        >
                            <FaGoogle /> S&apos;inscrire avec Google
                        </Button>
                    </Stack>

                    <Text mt={4} fontSize="sm" textAlign="center">
                        Vous avez déjà un compte ?{" "}
                        <ChakraLink
                            href="/login"
                            color="blue.500"
                        >
                            Connectez-vous
                        </ChakraLink>
                    </Text>
                </Card.Body>
            </Card.Root>
        </Flex>
    );
}
