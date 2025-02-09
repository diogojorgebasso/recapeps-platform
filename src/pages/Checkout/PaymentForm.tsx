import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CardElement, PaymentElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { PaymentRequest } from '@stripe/stripe-js';

interface PaymentFormProps {
  clientSecret: string;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
    amount: number;
  };
}

const PaymentForm: React.FC<PaymentFormProps> = ({ clientSecret, selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    if (!stripe) return;
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "eur",
      total: { label: "Plano Recap'eps", amount: selectedPlan.amount },
      requestPayerEmail: true,
    });
    pr.canMakePayment().then((result) => {
      if (result) setPaymentRequest(pr);
    });
  }, [stripe, selectedPlan.amount]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement!,
      },
    });

    if (error) {
      alert(`Erreur: ${error.message}`);
    } else {
      navigate("/success");
    }
  };

  return (
    <Container maxW="lg" py={8}>
      <VStack gap={4} align="stretch">
        <Heading size="xl">Payer pour {selectedPlan.name}</Heading>
        <Text>Prix: {selectedPlan.price}</Text>
        <Box as="form" onSubmit={handlePayment}>
          <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
            <PaymentElement />
          </Box>
          <Button
            type="submit"
            width="full"
            mt={6}
            colorScheme="green"
            size="lg"
            disabled={!stripe}
          >
            Payer
          </Button>
        </Box>
        {paymentRequest && (
          <PaymentRequestButtonElement
            options={{ paymentRequest, style: { paymentRequestButton: { theme: "dark" } } }}
          />
        )}
      </VStack>
    </Container>
  );
};

export default PaymentForm;
