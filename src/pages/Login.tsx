import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { AuthError } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { loginWithGoogle, isLoadingAuth, isAuthenticated, loginWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoadingAuth && isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, isLoadingAuth, navigate]);

    const handleGoogleLogin = async () => {
        setErrorMessage(null); // Clear error messages
        setIsSubmitting(true); // Set loading state
        try {
            await loginWithGoogle();
            console.log("Connexion avec Google réussie !");
            navigate("/dashboard");
        } catch (error) {
            setErrorMessage("Erreur lors de la connexion avec Google. Veuillez réessayer.");
            console.error("Erreur lors de la connexion avec Google :", (error as Error).message);
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    const handleLogin = async () => {
        setErrorMessage(null); // Clear error messages
        setIsSubmitting(true); // Set loading state
        try {
            await loginWithEmailAndPassword(email, password);
            console.log("Connexion réussie !");
            navigate("/dashboard");
        } catch (error) {
            // Handle specific errors based on Firebase Auth error codes
            const authError = error as AuthError;
            if (authError.code === "auth/user-not-found") {
                setErrorMessage("Utilisateur introuvable. Vérifiez votre email.");
            } else if (authError.code === "auth/wrong-password") {
                setErrorMessage("Mot de passe incorrect. Veuillez réessayer.");
            } else {
                setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
            }
            console.error("Erreur lors de la connexion :", authError.message);
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <div className="flex h-screen w-full items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Connexion</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour accéder à votre compte.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemple@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Link to="/forgot" className="ml-auto inline-block text-sm underline">
                                    Mot de passe oublié ?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm">{errorMessage}</p> // Display error messages
                        )}
                        <Button
                            disabled={isSubmitting || isLoadingAuth} // Disable button when submitting
                            type="button"
                            className="w-full"
                            onClick={handleLogin}
                        >
                            {isSubmitting ? "Connexion..." : "Connexion"}
                        </Button>
                        <Button
                            disabled={isSubmitting || isLoadingAuth}
                            variant="outline"
                            className="w-full"
                            onClick={handleGoogleLogin}
                        >
                            {isSubmitting ? "Connexion..." : "Connexion avec Google"}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Vous n&apos;avez pas encore de compte ?{" "}
                        <Link to="/register" className="underline">
                            Inscrivez-vous
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
