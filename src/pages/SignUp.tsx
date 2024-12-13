import { useState, useEffect } from "react";
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

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signUpWithEmailAndPassword, isLoadingAuth, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const handleSignUp = async () => {

        try {
            await signUpWithEmailAndPassword(email, password);
            console.log("Inscription réussie !");
            navigate("/dashboard");
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
        }
    };

    return (
        <div className="flex h-screen w-full items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Inscription</CardTitle>
                    <CardDescription>
                        Créez un compte en remplissant les informations ci-dessous.
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
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            disabled={isLoadingAuth}
                            variant="success"
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
                </CardContent>
            </Card>
        </div>
    );
}
