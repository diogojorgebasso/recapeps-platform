import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Box, Heading, List, Button, Card } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, getUserToken } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleCheckout = async (plan: { id: string; price: string; amount: number }) => {
    const token = await getUserToken();
    const response = await fetch("https://us-central1-recapeps-platform.cloudfunctions.net/createStripeCheckoutSession", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ items: [plan] }),
    });

    const data = await response.json();
    navigate("/payment", {
      state: {
        clientSecret: data.clientSecret,
        selectedPlan: plan,
      }
    });
  };

  const plans = [
    { id: "basic", price: "4.99€", amount: 499, description: "Basic Plan" },
    { id: "premium", price: "9.99€", amount: 999, description: "Premium Plan" }
  ];

  return (
    <Box p={8} maxW="2xl" mx="auto" textAlign="center">
      <Heading as="h1" size="xl" mb={6}>Choisissez votre plan</Heading>
      {plans.map((plan) => (
        <Card key={plan.id} variant="elevated" mb={4}>
          <Card.Header fontWeight="bold">{plan.price} par mois</Card.Header>
          <Card.Body>
            <List mt={3} variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCircleCheck />
                </List.Indicator>
                {plan.description}
              </List.Item>
            </List>
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
        </Card>
      ))}
    </Box>
  );
};

export default CheckoutPage;
