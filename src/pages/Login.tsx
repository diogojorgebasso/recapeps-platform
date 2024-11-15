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
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginWithGoogle, isLoadingAuth, isAuthenticated, loginWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Rediriger vers /dashboard si l'utilisateur est déjà authentifié
        if (!isLoadingAuth && isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, isLoadingAuth, navigate]);

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            console.log("Connexion avec Google réussie !");
            navigate("/dashboard");
        } catch (error) {
            console.error("Erreur lors de la connexion avec Google :", error);
        }
    };

    const handleLogin = async () => {
        try {
            await loginWithEmailAndPassword(email, password);
            console.log("Connexion réussie !");
            navigate("/dashboard");
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return (
        <div className="flex h-screen w-full items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Connexion</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour accéder à votre compte
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
                        <Button
                            disabled={isLoadingAuth}
                            type="button"
                            className="w-full"
                            onClick={handleLogin}
                        >
                            Connexion
                        </Button>
                        <Button
                            disabled={isLoadingAuth}
                            variant="outline"
                            className="w-full"
                            onClick={handleGoogleLogin}
                        >
                            Connexion avec Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Vous n&apos;avez pas encore de compte ?{" "}
                        <Link to="/sign-up" className="underline">
                            Inscrivez-vous
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
