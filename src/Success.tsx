import { Box, Container, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Success() {
    return (
        <Container maxW="container.md" py={10}>
            <VStack gap={6} textAlign="center">
                <Icon as={FaCheckCircle} w={16} h={16} color="green.500" />
                <Heading size="xl">Merci pour votre achat!</Heading>
                <Text fontSize="lg" color="gray.600">
                    We appreciate your business and hope you enjoy your products.
                </Text>
                <Box>
                    <Text fontSize="md" color="gray.500">
                        A confirmation email has been sent to your inbox.
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
};
