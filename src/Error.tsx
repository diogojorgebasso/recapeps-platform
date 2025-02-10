import {
    Box,
    Heading,
    Text,
    Button,
    Center,
} from "@chakra-ui/react";

import { useColorModeValue } from "./components/ui/color-mode";
import { Link } from "react-router";

const PaymentError = () => {
    const bgColor = useColorModeValue("gray.50", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.300");

    return (
        <Center h="100vh">
            <Box
                borderRadius="lg"
                boxShadow="md"
                p={8}
                maxWidth="400px"
                textAlign="center"
            >
                <Heading size="xl" color={textColor} mb={4}>
                    Échec du paiment
                </Heading>
                <Text fontSize="md" color={textColor} mb={6}>
                    Il semblerait que nous rencontrons des difficultés à procéder au paiement.
                </Text>
                <Button colorScheme="red" asChild><Link to="/checkout">Veuillez réessayer</Link></Button>
            </Box>
        </Center>
    );
};

export default PaymentError;