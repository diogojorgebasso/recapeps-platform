import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Box, Heading, List, Button, Card } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

export default function CheckoutPage() {
    const navigate = useNavigate();
    const { getUserToken } = useAuth();

    const handleCheckout = async () => {
        const token = await getUserToken();
        const items = [
            {
                id: "basic",
                price: "4.99€",
                amount: 499, // Amount in cents
                quantity: 1,
                description: "basic",
            },
        ];
        const response = await fetch("https://us-central1-recapeps-platform.cloudfunctions.net/createStripeCheckoutSession", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ items }),
        });
        console.log(response);

        const data = await response.json();
        navigate("/payment", {
            state: {
                clientSecret: data.clientSecret,
                selectedPlan: items[0],
            }
        });
    };

    return (
        <Box p={8} maxW="2xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" mb={6}>Choisissez votre plan</Heading>
            <Card.Root variant="elevated" >
                <Card.Header fontWeight="bold">4.99€ le premier mois puis 9,99€/mois</Card.Header>
                <Card.Body>
                    <List.Root mt={3} variant="plain" align="center">
                        <List.Item>
                            <List.Indicator asChild color="green.500">
                                <LuCircleCheck />
                            </List.Indicator>
                            Sans aucun engagement
                        </List.Item>
                        <List.Item>
                            <List.Indicator asChild color="green.500">
                                <LuCircleCheck />
                            </List.Indicator>
                            Accès illimité à toutes les fiches de révision, quiz et flashcards
                        </List.Item>
                        <List.Item>
                            <List.Indicator asChild color="green.500">
                                <LuCircleCheck />
                            </List.Indicator>
                            Suivi de ta progression
                        </List.Item>
                    </List.Root>
                </Card.Body>
                <Card.Footer>
                    <Button
                        onClick={handleCheckout}
                        rounded="full"
                        mt={3}
                        size="2xl"
                        bg="orange.500"
                        color="white"
                        _hover={{
                            bg: "orange.600",
                            transform: "scale(1.1)"
                        }}
                    >
                        Confirmer et Payer
                    </Button>
                </Card.Footer>
            </Card.Root>

        </Box>
    );
};

