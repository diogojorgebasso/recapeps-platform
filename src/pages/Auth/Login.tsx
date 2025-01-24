import { useEffect, useState } from "react";
import {
    Flex,
    Card,
    Heading,
    Text,
    Input,
    Link as ChakraLink,
    Fieldset,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/hooks/useAuth";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { isAuthenticated, simpleLogin, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        console.log("entrei no handleLogin")
        setIsSubmitting(true);
        try {
            await simpleLogin(email, password);
            navigate("/dashboard");
        } catch (error) {
            const authError = error as { code?: string; message: string };
            if (authError.code === "auth/user-not-found") {
                setErrorMessage("Utilisateur introuvable. Vérifiez votre email.");
            } else if (authError.code === "auth/wrong-password") {
                setErrorMessage("Mot de passe incorrect. Veuillez réessayer.");
            } else {
                setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
                console.error(error)
            }
        } finally {
            setIsSubmitting(false);
        }
    };



    const handleGoogleLogin = async () => {
        setErrorMessage(null);
        setIsSubmitting(true);
        try {
            await loginWithGoogle();
            navigate("/dashboard");
        } catch (error) {
            setErrorMessage("Erreur lors de la connexion avec Google. Veuillez réessayer.");
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
                        Connexion
                    </Heading>
                    <Text mt={2} fontSize="sm" color="gray.600">
                        Entrez votre email ci-dessous pour accéder à votre compte.
                    </Text>
                </Card.Header>

                <Card.Body>
                    <form onSubmit={handleLogin}>
                        <Fieldset.Root>
                            <Field label="Email">
                                <Input
                                    autoComplete="email"
                                    type="email"
                                    placeholder="exemple@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>

                            <ChakraLink
                                href="/forgot-password"
                                color="blue.600"
                                textDecoration="underline"
                                fontSize="sm"
                            >
                                Mot de passe oublié ?
                            </ChakraLink>

                            <PasswordInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />


                            {errorMessage && (
                                <Text color="red.500" fontSize="sm">
                                    {errorMessage}
                                </Text>
                            )}
                            {isSubmitting ?
                                <Button
                                    loading
                                    colorPalette="orange.200"
                                    w="full"
                                    type="submit">
                                    Connexion
                                </Button>
                                :
                                <Button

                                    colorPalette="orange.200"
                                    w="full"
                                    type="submit">
                                    Connexion
                                </Button>}


                            <Button
                                variant="outline"
                                w="full"
                                onClick={handleGoogleLogin}
                            >
                                <FaGoogle />Connexion avec Google
                            </Button>
                        </Fieldset.Root>
                    </form>
                    <Text mt={4} fontSize="sm" textAlign="center">
                        Vous n&apos;avez pas encore de compte ?{" "}
                        <ChakraLink
                            href="/register"
                            color="blue.500"
                            textDecoration="underline">
                            Inscrivez-vous
                        </ChakraLink>
                    </Text>
                </Card.Body>
            </Card.Root>
        </Flex >
    );
}
