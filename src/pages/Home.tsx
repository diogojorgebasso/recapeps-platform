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
                <img height="220px" width="220px" alt="Recapeps Logo" src="/logo.SVG" />
                <Heading as="h1" size="5xl" letterSpacing="tight">
                    <Highlight query="RECAP'EPS" styles={{ color: "orange.600" }}>
                        Bienvenue sur RECAP'EPS
                    </Highlight>
                </Heading>
                <Heading as="h2">
                    Votre plateforme pour organiser vos connaissances et vos études !🙏
                </Heading>
                <HStack>
                    <Button
                        rounded="full"
                        asChild
                        size="lg"
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
                            <Card.Title color="orange.500">FlashCards</Card.Title>
                            <Text>
                                Créez et organisez vos notes de manière efficace.
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
                            <Card.Title color="orange.500">
                                Organisez vos notes
                            </Card.Title>
                            <Text>
                                Gardez vos idées organisées et facilement accessibles pour
                                une étude plus efficace.
                            </Text>
                        </Card.Body>
                    </Card.Root>
                </LinkBox>

                <LinkBox>
                    <Card.Root size="lg" variant="elevated" border="1px" borderColor="gray.200">
                        <Card.Header>
                            <Icon fontSize="40px">
                                <LinkOverlay href="/quizz">
                                    <LuListTodo />
                                </LinkOverlay>
                            </Icon>
                        </Card.Header>
                        <Card.Body gap={4}>
                            <Card.Title color="orange.500">
                                Quizz
                            </Card.Title>
                            <Text>
                                Testez vos connaiscances avec des quiz personnalisés.
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
