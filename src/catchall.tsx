import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Flex direction="column" align="center" justify="center" minH="100vh" textAlign="center" p={6}>
            <Heading as="h1" size="4xl" color="primary" mb={4}>
                404
            </Heading>
            <Heading as="h2" size="lg" color="gray.500" mb={6}>
                Page non trouvée
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={8}>
                Il semble que vous avez essayé d'accéder à une page qui n'existe pas. Retournez à un endroit sûr ?
            </Text>
            <Button px={6} py={3} onClick={() => navigate("/")}>
                Retour à la page d&apos;accueil
            </Button>
        </Flex>
    );
};

export default NotFoundPage;
