import {
    Box,
    Heading,
    Text,
    Link,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";

export default function Support() {
    return (
        <Box py={12}>
            <VStack gap={4} textAlign="center" mb={8}>
                <Heading as="h2" size="2xl" fontWeight="semibold">
                    Comment pouvons-nous vous aider ?
                </Heading>
                <Text >
                    Si vous avez des questions, des problèmes ou besoin d’assistance,
                    n’hésitez pas à nous contacter. Nous sommes là pour vous aider !
                </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
                <Box
                    bg="white"
                    shadow="md"
                    rounded="lg"
                    p={6}
                >
                    <Heading color="orange.500" as="h3" size="xl" mb={2} fontWeight="bold">
                        Support Développeur
                    </Heading>
                    <Text color="gray.600" mb={4}>
                        Pour des questions techniques ou liées au développement,
                        contactez M. Diogo.
                    </Text>
                    <Link
                        href="mailto:diogo.basso@depinfonancy.net"
                        color="orange.600"
                        fontWeight="medium"
                        _hover={{ textDecoration: "underline" }}
                    >
                        diogo.basso@depinfonancy.net
                    </Link>
                </Box>

                {/* Contato Commercial */}
                <Box
                    bg="white"
                    shadow="md"
                    rounded="lg"
                    p={6}
                >
                    <Heading color="orange.500" as="h3" size="xl" mb={2} fontWeight="bold">
                        Support Commercial
                    </Heading>
                    <Text color="gray.600" mb={4}>
                        Pour des demandes commerciales, contactez M. Corentin.
                    </Text>
                    <Link
                        href="mailto:corentinfelder@gmail.com"
                        color="orange.600"
                        fontWeight="medium"
                        _hover={{ textDecoration: "underline" }}
                    >
                        corentinfelder@gmail.com
                    </Link>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
