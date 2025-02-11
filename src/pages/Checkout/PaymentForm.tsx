import React from 'react';
import { useNavigate } from 'react-router';
import { CardElement, useStripe, useElements, ExpressCheckoutElement, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

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
  const bg = useColorModeValue('black', 'white');
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
    <Container border="1px solid orange" maxW=" lg" py={8}>
      <VStack gap={4} align="stretch" >
        <Heading size="xl">Payer pour {selectedPlan.name}</Heading>
        <Text>Prix: {selectedPlan.price}</Text>
        <Box as="form" onSubmit={handlePayment}>
          <LinkAuthenticationElement />
          <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    color: bg,
                  }
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            width="full"
            mt={6}
            colorPalette="green"
            size="lg"
            disabled={!stripe}
          >
            Payer
          </Button>
        </Box>
        <ExpressCheckoutElement onConfirm={async (params) => {
          console.log('onConfirm', params);
        }} />
      </VStack >
    </Container >
  );
};

export default PaymentForm;
