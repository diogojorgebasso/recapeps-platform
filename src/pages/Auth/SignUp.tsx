import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input, Card } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const { signUpWithEmailAndPassword, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated]);

    const handleSignUp = async () => {
        try {
            await signUpWithEmailAndPassword(email, password);
            console.log("Inscription réussie !");
            navigate("/dashboard");
        } catch (error) {
            setError((error as Error).message);
            console.error("Erreur lors de l'inscription :", error);
        }
    };

    return (
        <div className="flex h-screen w-full items-center">
            <Card.Root className="mx-auto max-w-sm">
                <Card.Header>
                    <Card.Title className="text-2xl">Inscription</Card.Title>
                    <Card.Description>
                        Créez un compte en remplissant les informations ci-dessous.
                    </Card.Description>
                </Card.Header>
                <Card.Body>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Field label="Email">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="exemple@email.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>
                        </div>
                        <div className="grid gap-2">
                            <Field label="Mot de passe">
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Entrez votre mot de passe"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Field>
                            {error && <div className="text-red-500">{error}</div>}
                        </div>
                        <Button
                            type="button"
                            className="w-full"
                            onClick={handleSignUp}
                        >
                            S&apos;inscrire
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Vous avez déjà un compte ?{" "}
                        <Link to="/login" className="underline">
                            Connectez-vous
                        </Link>
                    </div>
                </Card.Body>
            </Card.Root>
        </div >
    );
}
