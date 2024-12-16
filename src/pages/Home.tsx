import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    CardFooter,
    VStack,
    Card
} from "@chakra-ui/react";

export default function Home() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Container maxW="container.lg" flex="1" py="8">
                {/* Section d'introduction */}
                <VStack textAlign="center" gap="6" my="12">
                    <Heading as="h2" size="xl" fontWeight="bold">
                        Bienvenue sur Recapeps!
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        Votre plateforme pour organiser vos connaissances et vos études.
                    </Text>
                    <Button asChild px="6" py="3">
                        <Link to="/dashboard">Commencer Maintenant</Link>
                    </Button>
                </VStack>

                {/* Section des fonctionnalités */}
                <Box id="features" my="12">
                    <Heading as="h3" size="lg" textAlign="center" mb="6">
                        Fonctionnalités
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                        {/* Chatbot */}
                        <Card.Root shadow="md" _hover={{ shadow: "lg" }} transition="all 0.3s">
                            <Card.Header>
                                <Heading size="md">Chatbot</Heading>
                            </Card.Header>
                            <Card.Body>
                                <Text>Discutez avec une IA pour apprendre et réviser des contenus.</Text>
                            </Card.Body>
                            <CardFooter>
                                <Button asChild variant="outline">
                                    <Link to="/Chatbot">
                                        Explorer
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card.Root>

                        {/* Notes */}
                        <Card.Root shadow="md" _hover={{ shadow: "lg" }} transition="all 0.3s">
                            <Card.Header>
                                <Heading size="md">Notes</Heading>
                            </Card.Header>
                            <Card.Body>
                                <Text>Créez et organisez vos notes de manière efficace.</Text>
                            </Card.Body>
                            <CardFooter>
                                <Button variant="outline">
                                    <Link to="/Notes">
                                        Explorer
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card.Root>

                        {/* Flashcards */}
                        <Card.Root shadow="md" _hover={{ shadow: "lg" }} transition="all 0.3s">
                            <Card.Header>
                                <Heading size="md">Flashcards</Heading>
                            </Card.Header>
                            <Card.Body>
                                <Text>Mémorisez des concepts importants de manière ludique.</Text>
                            </Card.Body>
                            <CardFooter>
                                <Button variant="outline">
                                    <Link to="/Flashcards">
                                        Explorer
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card.Root>

                        {/* Quizz */}
                        <Card.Root shadow="md" _hover={{ shadow: "lg" }} transition="all 0.3s">
                            <Card.Header>
                                <Heading size="md">Quizz</Heading>
                            </Card.Header>
                            <Card.Body>
                                <Text>Testez vos connaissances avec des quiz personnalisés.</Text>
                            </Card.Body>
                            <CardFooter>
                                <Button variant="outline">
                                    <Link to="/Quizz">
                                        Commencer
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card.Root>
                    </SimpleGrid>
                </Box>

                {/* Section supplémentaire */}
                <Box id="about" my="12" textAlign="center">
                    <Heading as="h3" size="lg" mb="6">
                        Pourquoi Recapeps-Web ?
                    </Heading>
                    <Text fontSize="lg" maxW="2xl" mx="auto">
                        Recapeps-Web vous offre des outils modernes pour maximiser votre apprentissage.
                        Explorez une plateforme intuitive, personnalisable et conçue pour répondre à vos besoins éducatifs.
                    </Text>
                </Box>

                {/* Section Appel à l'action */}
                <Box id="cta" my="12" bg="blue.500" color="white" py="8" borderRadius="lg">
                    <VStack textAlign="center" gap="4">
                        <Heading as="h3" size="lg">
                            Rejoignez notre communauté dès aujourd&apos;hui !
                        </Heading>
                        <Button
                            asChild
                            px="6"
                            py="3"
                            bg="white"
                            color="blue.500"
                            _hover={{ bg: "gray.100" }}
                        >
                            <Link to="/register">
                                S&apos;inscrire
                            </Link>
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}
