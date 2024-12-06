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
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react"; // Icon library (can replace with others)

export default function Login() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const schema = z.object({
        email: z.string().email({ message: "Email inválido" }),
        password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { loginWithGoogle, isLoadingAuth, isAuthenticated, loginWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoadingAuth && isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, isLoadingAuth, navigate]);

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

    const handleLogin = async () => {
        setErrorMessage(null);
        setIsSubmitting(true);
        const { email, password } = form.getValues();
        try {
            await loginWithEmailAndPassword(email, password);
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
        <div className="flex h-screen w-full items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Connexion</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour accéder à votre compte.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleLogin)}>
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="exemple@email.com" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center justify-between">
                                                <FormLabel>Mot de passe</FormLabel>
                                                <Link to="/forgot" className="text-sm underline">
                                                    Mot de passe oublié ?
                                                </Link>
                                            </div>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        {...field}
                                                        placeholder="******"
                                                        autoComplete="current-password"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="h-5 w-5" />
                                                        ) : (
                                                            <Eye className="h-5 w-5" />
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
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
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Vous n&apos;avez pas encore de compte ?{" "}
                                <Link to="/register" className="underline">
                                    Inscrivez-vous
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
