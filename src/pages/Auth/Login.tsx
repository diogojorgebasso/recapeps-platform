import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, Input, Link as ChakraLink } from "@chakra-ui/react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router";
export default function Login() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const schema = z.object({
        email: z.string().email({ message: "Email inválido" }),
        password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    });

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { loginWithGoogle, isAuthenticated, loginWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const handleGoogleLogin = async () => {
        setErrorMessage(null);
        setIsSubmitting(true);
        try {
            await loginWithGoogle();
            console.log("Connexion avec Google réussie !");
            navigate("/dashboard");
        } catch (error) {
            setErrorMessage("Erreur lors de la connexion avec Google. Veuillez réessayer.");
            console.error("Erreur lors de la connexion avec Google :", (error as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleLogin = async (data: { email: string; password: string }) => {
        setErrorMessage(null);
        setIsSubmitting(true);
        try {
            await loginWithEmailAndPassword(data.email, data.password);
            console.log("Connexion réussie !");
            navigate("/dashboard");
        } catch (error) {
            const authError = error as { code: string; message: string };
            if (authError.code === "auth/user-not-found") {
                setErrorMessage("Utilisateur introuvable. Vérifiez votre email.");
            } else if (authError.code === "auth/wrong-password") {
                setErrorMessage("Mot de passe incorrect. Veuillez réessayer.");
            } else {
                setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
            }
            console.error("Erreur lors de la connexion :", authError.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card.Root>
            <Card.Header>
                <Card.Title className="text-2xl">Connexion</Card.Title>
                <Card.Description>
                    Entrez votre email ci-dessous pour accéder à votre compte.
                </Card.Description>
            </Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <Field label="Email">
                        <Input autoComplete="email" placeholder="exemple@email.com" {...register("email")} />
                    </Field>
                    <ChakraLink variant="underline" asChild >
                        <Link to="/forgot-password">
                            Mot de passe oublié ?
                        </Link>
                    </ChakraLink>
                    <PasswordInput {...register("password")} />
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full"
                    >
                        {isSubmitting ? "Connexion..." : "Connexion"}
                    </Button>
                    <Button
                        disabled={isSubmitting}
                        variant="outline"
                        className="w-full"
                        onClick={handleGoogleLogin}
                    >
                        Connexion avec Google
                    </Button>
                    <div className="mt-4 text-center text-sm">
                        Vous n&apos;avez pas encore de compte ?{" "}
                        <ChakraLink variant="underline" asChild >
                            <Link to="/register" >
                                Inscrivez-vous
                            </Link>
                        </ChakraLink>
                    </div>
                </form>
            </Card.Body>
        </Card.Root>
    );
}
