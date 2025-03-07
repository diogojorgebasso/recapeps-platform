import { Box, Heading, List, Button, Card, Text, Center } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { httpsCallable } from 'firebase/functions';
import { functions } from "@/utils/firebase";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSubscription } from "@/hooks/useSubscription";
import { Link } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";

interface Plan {
    id: string;
    price: string;
    amount: number;
    description: string;
    priceId: string;
}

interface StripeResponse {
    data: {
        id: string;
    };
}

const stripePromise = loadStripe("pk_live_51QqK3jEfLSFXfvk1Ysx877RxVyMoWj4NMoFUWGvyvVKbI7Zw9bT4FzuJ4TKf0ne3LxO7FjKCaTGdwJZ1VTRgBkpv00eNrzjryZ");

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


    const handleCheckout = async (plan: Plan) => {
        setLoading(true);
        try {
            const createStripeCheckoutSession = httpsCallable(functions, 'createStripeCheckoutSession');
            const response = await createStripeCheckoutSession({ priceId: plan.priceId }) as StripeResponse;

            const { id: sessionId } = response.data;

            const stripe = await stripePromise;

            if (stripe) {
                await stripe.redirectToCheckout({ sessionId });
            } else {
                console.error("Stripe failed to load.");
                navigate("/error");
            }

        } catch (error: any) {
            console.error("Error calling function:", error);
            navigate("/error");
        } finally {
            setLoading(false);
        }
    };

    const plans = [
        { id: "basic", price: "4.99€", amount: 499, description: "Basic Plan", priceId: 'price_1QrIBREfLSFXfvk1pguf3yl6' },
        {}
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
                    </Card.Body>
                    <Text>Résiliable à tout moment !</Text>
                    <Text mt={2}>
                        En appuyant sur le bouton ci-dessous, l’Utilisateur <Link href="/legal/conditions-generales">accepte nos CGV</Link>.
                    </Text>
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
