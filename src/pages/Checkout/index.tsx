import { Box, Heading, List, Button, Card, Text, Center } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { httpsCallable } from 'firebase/functions';
import { functions } from "@/utils/firebase";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSubscription } from "@/hooks/useSubscription";
import { Link } from "@chakra-ui/react";

export default function CheckoutPage() {
    const { isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const { isSubscribed } = useSubscription();

    useEffect(() => {
        if (isSubscribed) {
            navigate("/profil");
        }
    }, [isSubscribed, navigate]);

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login?redirect=/checkout");
        }
    }, [isAuthenticated, navigate]);

    const handleCheckout = async (plan: { id: string; price: string; amount: number, priceId: string }) => {
        setLoading(true);
        try {
            const createStripeCheckoutSession = httpsCallable(functions, 'createStripeCheckoutSession');
            const result = await createStripeCheckoutSession({ priceId: plan.priceId, quantity: 1 });
            const data = result.data as { clientSecret?: string };
            if (!data.clientSecret) {
                console.error("Client secret missing in response:", data);
                navigate("/error");
                return;
            }
            navigate("/payment", { state: { clientSecret: data.clientSecret, selectedPlan: { id: plan.id, price: plan.price, amount: plan.amount } } });
        } catch (error: any) {
            console.error("Error calling function:", error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    const plans = [
        { id: "basic", price: "4.99€", amount: 499, description: "Basic Plan", priceId: 'price_1QqyWOEfLSFXfvk1xUBQQiPj' },
    ];

    return (
        <Box p={8} rounded="md" maxW="2xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" mb={6}>Choisissez votre plan</Heading>
            {plans.map((plan) => (
                <Card.Root border="1px solid orange" key={plan.id} variant="elevated" mb={4} textAlign="center">
                    <Card.Header fontWeight="bold"> Offre de dernière minute ⏰<br />4,99€ par mois seulement 🔥🔥</Card.Header>
                    <Card.Body>
                        Débloque l’accès à tout le contenu du site:
                        <Center>
                            <List.Root mt={3} variant="plain" textAlign="center">
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <LuCircleCheck />
                                    </List.Indicator>
                                    Fiches de révision
                                </List.Item>
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <LuCircleCheck />
                                    </List.Indicator>
                                    Quiz ascociés
                                </List.Item>
                                <List.Item>
                                    <List.Indicator asChild color="green.500">
                                        <LuCircleCheck />
                                    </List.Indicator>
                                    Flashcards
                                </List.Item>
                            </List.Root>
                        </Center>
                        <Text mt={2}>
                            En appuyant sur le bouton ci-dessous, l’Utilisateur <Link href="/legal/conditions-generales">accepte nos CGV</Link>.
                        </Text>
                    </Card.Body>
                    <Card.Footer justifyContent={"center"}>
                        <Button
                            onClick={() => handleCheckout(plan)}
                            loading={loading}
                            rounded="full"
                            mt={3}
                            size="2xl"
                            bg="orange.500"
                            color="white"
                            _hover={{ bg: "orange.600", transform: "scale(1.1)" }}
                        >
                            Confirmer et payer
                        </Button>
                    </Card.Footer>
                </Card.Root>
            ))}
        </Box>
    );
};
