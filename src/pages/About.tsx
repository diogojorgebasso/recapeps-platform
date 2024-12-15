import {
    Box,
    Container,
    Heading,
    Text,
    List,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router";

export default function About() {
    return (
        <Box
            minH="100vh"
            bg="gray.100"
            color="gray.900"
            _dark={{ bg: "gray.800", color: "gray.100" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Container
                maxW="4xl"
                p="8"
                bg="white"
                rounded="lg"
                shadow="xl"
                transition="all 0.3s"
                _dark={{ bg: "gray.900" }}
            >
                {/* Título principal */}
                <Heading
                    as="h1"
                    size="xl"
                    textAlign="center"
                    fontWeight="extrabold"
                    mb="8"
                    color="gray.800"
                    _dark={{ color: "gray.100" }}
                >
                    À Propos de Nous
                </Heading>

                {/* Parágrafo introdutório */}
                <Text
                    fontSize="lg"
                    lineHeight="tall"
                    mb="6"
                    color="gray.700"
                    _dark={{ color: "gray.300" }}
                >
                    Bienvenue sur notre plateforme ! Nous sommes passionnés par l'idée
                    d'aider les gens à atteindre leurs objectifs grâce à des outils
                    innovants et accessibles. Notre priorité est de créer des solutions
                    simples et intuitives qui rendent l'apprentissage et l'organisation
                    plus efficaces.
                </Text>

                {/* Título de section */}
                <Heading
                    as="h2"
                    size="lg"
                    mb="4"
                    color="gray.800"
                    _dark={{ color: "gray.100" }}
                >
                    Notre Mission
                </Heading>

                <Text
                    fontSize="lg"
                    lineHeight="tall"
                    mb="6"
                    color="gray.700"
                    _dark={{ color: "gray.300" }}
                >
                    Notre mission est de fournir une plateforme qui permet aux individus
                    d'apprendre efficacement, d'organiser leurs idées et d'atteindre le
                    succès dans leurs objectifs personnels et professionnels.
                </Text>

                {/* Pourquoi Nous Choisir */}
                <Heading
                    as="h2"
                    size="lg"
                    mb="4"
                    color="gray.800"
                    _dark={{ color: "gray.100" }}
                >
                    Pourquoi Nous Choisir ?
                </Heading>
                <List.Root as="ol">
                    <List.Item>
                        <Text as="span" fontWeight="medium" color="gray.800" _dark={{ color: "gray.100" }}>
                            Simplicité d'Utilisation :
                        </Text>{" "}
                        Nos outils sont conçus pour être simples et faciles à utiliser.
                    </List.Item>
                    <List.Item>
                        <Text as="span" fontWeight="medium" color="gray.800" _dark={{ color: "gray.100" }}>
                            Technologie Avancée :
                        </Text>{" "}
                        Nous utilisons les meilleures pratiques et technologies pour
                        garantir l'efficacité.
                    </List.Item>
                    <List.Item>
                        <Text as="span" fontWeight="medium" color="gray.800" _dark={{ color: "gray.100" }}>
                            Support Client :
                        </Text>{" "}
                        Nous sommes là pour vous accompagner à chaque étape de votre
                        parcours.
                    </List.Item>
                </List.Root>
                {/* Botão de CTA */}
                <Box mt="10" textAlign="center">
                    <Button
                        bgGradient="to-r"
                        gradientFrom="blue.500"
                        gradientTo="blue.600"
                        color="white"
                        py="3"
                        px="6"
                        rounded="lg"
                        shadow="lg"
                        _focus={{ ring: 4, ringColor: "blue.300", _dark: { ringColor: "blue.700" } }}
                        transition="all 0.3s"
                    >
                        <Link to="/contact">
                            Contactez-Nous
                        </Link>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
