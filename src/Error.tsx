import {
    Box,
    Heading,
    Text,
    Button,
    Center,
} from "@chakra-ui/react";

import { Link } from "react-router";

const PaymentError = () => {

    return (
        <Center h="100vh">
            <Box
                borderRadius="lg"
                boxShadow="md"
                p={8}
                maxWidth="400px"
                textAlign="center"
            >
                <Heading size="xl" mb={4}>
                    Échec du paiment
                </Heading>
                <Text fontSize="md" mb={6}>
                    Il semblerait que nous rencontrons des difficultés à procéder au paiement.
                </Text>
                <Button colorPalette="red" asChild><Link to="/checkout">Veuillez réessayer</Link></Button>
            </Box>
        </Center>
    );
};

export default PaymentError;