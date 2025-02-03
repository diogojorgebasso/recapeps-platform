import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Image,
    Card,
    HStack,
    Icon,
    Highlight,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react";
import { LuNotebookPen, LuListTodo } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi"
import { useColorModeValue } from "@/components/ui/color-mode";


export default function Home() {
    const bg = useColorModeValue("gray.100", "gray.950")

    return (
        <Box>
            <VStack alignItems="center" py="8" bg={bg} width="100%" textAlign="center">
                <img height="220px" width="220px" alt="Recapeps Logo" src="/logo-recapepeps.svg" />
                <Heading as="h1" size="5xl" letterSpacing="tight">
                    <Highlight query="RECAP'EPS" styles={{ color: "orange.600" }}>
                        Bienvenue sur RECAP'EPS
                    </Highlight>
                </Heading>
                <Heading size={{ base: "xl", md: "2xl" }} as="h2">
                    Réussir ce n'est qu'une question d'entraînement, avec Recap'eps, s'entraîner n'a jamais été aussi facile 😎
                </Heading>
                <HStack display={{ base: "none", md: "flex" }}>
                    <Button
                        rounded="full"
                        asChild
                        size="2xl"
                        bg="orange.500"
                        color="white"
                        _hover={{
                            bg: "orange.600",
                            transform: "scale(1.1)"
                        }}
                    >
                        <Link to="/dashboard">COMMENCER MAINTENANT</Link>
                    </Button>
                    <Image alt="Avatar running" height="100px" width="100px" src="/avatar.svg" />
                </HStack>
                <VStack display={{ base: "flex", md: "none" }}>
                    <Button
                        rounded="full"
                        asChild
                        size="2xl"
                        bg="orange.500"
                        color="white"
                        _hover={{
                            bg: "orange.600",
                            transform: "scale(1.1)"
                        }}
                    >
                        <Link to="/dashboard">COMMENCER MAINTENANT</Link>
                    </Button>
                    <Image alt="Avatar running" height="100px" width="100px" src="/avatar.svg" />
                </VStack>
            </VStack>

            <SimpleGrid p={4} minChildWidth="sm" gap="8">
                <LinkBox>
                    <Card.Root size="lg" variant="elevated" border="1px" borderColor="gray.200">
                        <Card.Header>
                            <Icon fontSize="40px">
                                <LinkOverlay href="/flashcards">
                                    <LuNotebookPen />
                                </LinkOverlay>
                            </Icon>
                        </Card.Header>
                        <Card.Body gap={4}>
                            <Card.Title fontSize="3xl" color="orange.500">FlashCards</Card.Title>
                            <Text fontSize="xl">
                                Retiens efficacement toutes les connaissances donc tu auras besoin pour les écrits !
                            </Text>
                        </Card.Body>
                    </Card.Root>
                </LinkBox>

                <LinkBox>
                    <Card.Root size="lg" variant="elevated" border="1px" borderColor="gray.200">
                        <Card.Header>
                            <Icon fontSize="40px">
                                <LinkOverlay href="/notes">
                                    <FiBookOpen />
                                </LinkOverlay>
                            </Icon>
                        </Card.Header>
                        <Card.Body gap={4}>
                            <Card.Title fontSize="3xl" color="orange.500">
                                Fiches de révision
                            </Card.Title>
                            <Text fontSize="xl">
                                Nous t'avons fait une synthèse de tous les grands thèmes que tu risques de rencontrer au concours.
                            </Text>
                        </Card.Body>
                    </Card.Root>
                </LinkBox>

                <LinkBox>
                    <Card.Root size="lg" variant="elevated" border="1px" borderColor="gray.200">
                        <Card.Header>
                            <Icon fontSize="40px">
                                <LinkOverlay href="/quiz">
                                    <LuListTodo />
                                </LinkOverlay>
                            </Icon>
                        </Card.Header>
                        <Card.Body gap={4}>
                            <Card.Title fontSize="3xl" color="orange.500">
                                Quiz
                            </Card.Title>
                            <Text fontSize="xl">
                                Après avoir lu une fiche, fais des quiz associés pour voir si tu as bien compris et assimilé le cours !
                            </Text>
                        </Card.Body>
                    </Card.Root>
                </LinkBox>

            </SimpleGrid>
            <Box bg="orange.500" py="12" color="white">
                <Container maxW="container.md" textAlign="center">
                    <VStack gap="6">
                        <Heading as="h2" size="lg">
                            Rejoignez notre communauté dès aujourd&apos;hui !
                        </Heading>
                        <Button
                            asChild
                            size="lg"
                            bg="white"
                            color="orange.500"
                            _hover={{ bg: "gray.100" }}
                        >
                            <Link to="/register">S&apos;INSCRIRE</Link>
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
}
