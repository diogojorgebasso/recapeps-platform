import { redirect } from "react-router";
import { Box, Heading, List, Button, Card } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { httpsCallable } from 'firebase/functions';
import { functions } from "@/utils/firebase";
import { useAuth } from "@/hooks/useAuth";

export default function CheckoutPage() {
    const { getUserToken } = useAuth();

    const handleCheckout = async (plan: { id: string; price: string; amount: number }) => {
        try {
            const token = await getUserToken();
            if (!token) {
                // Redirect to login if the user is not authenticated
                return redirect("/login");
            }

            const createStripeCheckoutSession = httpsCallable(functions, 'createStripeCheckoutSession');
            const result = await createStripeCheckoutSession({ items: [plan] });
            const data = result.data as { clientSecret: string };

            return redirect(`/payment?clientSecret=${data.clientSecret}&planId=${plan.id}&planPrice=${plan.price}&planAmount=${plan.amount}`);
        } catch (error: any) {
            console.error("Error calling function:", error);
            // Handle error appropriately (e.g., show an error message to the user)
            return redirect("/error"); // Redirect to an error page
        }
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
