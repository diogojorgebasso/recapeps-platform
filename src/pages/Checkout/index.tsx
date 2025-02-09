import React from "react";
import { redirect } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Box, Heading, List, Button, Card } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

const CheckoutPage: React.FC = () => {
    const { getUserToken } = useAuth();

    const handleCheckout = async (plan: { id: string; price: string; amount: number }) => {
        const token = await getUserToken();
        const response = await fetch("https://us-central1-recapeps-platform.cloudfunctions.net/createStripeCheckoutSession", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ items: [plan] }),
        });

        const data = await response.json();
        redirect("/payment", {
            state: {
                clientSecret: data.clientSecret,
                selectedPlan: plan,
            }
        });
    };

    const plans = [
        { id: "basic", price: "4.99€", amount: 499, description: "Basic Plan" },
    ];

    return (
        <Box p={8} maxW="2xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" mb={6}>Choisissez votre plan</Heading>
            {plans.map((plan) => (
                <Card.Root key={plan.id} variant="elevated" mb={4}>
                    <Card.Header fontWeight="bold">{plan.price} par mois</Card.Header>
                    <Card.Body>
                        <List.Root mt={3} variant="plain" align="center">
                            <List.Item>
                                <List.Indicator asChild color="green.500">
                                    <LuCircleCheck />
                                </List.Indicator>
                                {plan.description}
                            </List.Item>
                        </List.Root>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            onClick={() => handleCheckout(plan)}
                            rounded="full"
                            mt={3}
                            size="2xl"
                            bg="orange.500"
                            color="white"
                            _hover={{ bg: "orange.600", transform: "scale(1.1)" }}
                        >
                            Confirmer et Payer
                        </Button>
                    </Card.Footer>
                </Card.Root>
            ))}
        </Box>
    );
};

export default CheckoutPage;
