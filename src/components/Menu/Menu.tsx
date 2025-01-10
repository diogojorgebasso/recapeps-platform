import {
    Box,
    Flex,
    HStack,
    Text,
    SimpleGrid,
    VStack
} from "@chakra-ui/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import ContextualAvatar from "./ContextualAvatar";
import { ColorModeButton } from "../ui/color-mode";
import { ChevronDownIcon } from "lucide-react";

export default function Menu() {
    return (
        <Box px={4} py={2}>
            <Flex align="center" justify="space-between" w="full">
                {/* Navigation Menu */}
                <HStack gap={4}>
                    {/* Fonctionnalités Menu */}
                    <MenuRoot>
                        <MenuTrigger asChild>
                            <Button variant="plain" fontWeight="bold">
                                Fonctionnalités <ChevronDownIcon />
                            </Button>
                        </MenuTrigger>
                        <MenuContent p={4} boxShadow="lg" borderRadius="md" maxW="lg">
                            <SimpleGrid columns={2} gap={4}>
                                <MenuItem value="dashboard" asChild>
                                    <Link to="/dashboard">
                                        <VStack align="start">
                                            <Text fontSize="sm" fontWeight="bold">
                                                Tableau de Bord
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                Gérez vos activités et accédez rapidement à toutes vos
                                                ressources éducatives.
                                            </Text>
                                        </VStack>
                                    </Link>
                                </MenuItem>
                                <MenuItem value="notes" asChild>
                                    <Link to="/notes">
                                        <VStack align="start">

                                            <Text fontSize="sm" fontWeight="bold">
                                                Notes
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                Créez, organisez et révisez vos notes efficacement dans un
                                                espace structuré.
                                            </Text>
                                        </VStack>
                                    </Link>
                                </MenuItem>
                                <MenuItem value="flashcards" asChild>
                                    <Link to="/flashcards">
                                        <VStack align="start">

                                            <Text fontSize="sm" fontWeight="bold">
                                                Cartes Mémoire
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                Mémorisez des concepts clés avec des cartes interactives et
                                                intuitives.
                                            </Text>
                                        </VStack>
                                    </Link>
                                </MenuItem>
                                <MenuItem value="quizz" asChild>
                                    <VStack align="start">
                                        <Link to="/quizz">
                                            <Text fontSize="sm" fontWeight="bold">
                                                Quizz
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                Testez vos connaissances avec des quiz personnalisés.
                                            </Text>
                                        </Link>
                                    </VStack>
                                </MenuItem>
                            </SimpleGrid>
                        </MenuContent>
                    </MenuRoot>

                    {/* Static Links */}
                    <Button asChild fontWeight="bold">
                        <Link to="/contact">Contact</Link>
                    </Button>
                    <Button fontWeight="bold">
                        <Link to="/about">À Propos</Link>
                    </Button>
                </HStack>

                <HStack gap={4} ml="auto">
                    <ContextualAvatar />
                    <ColorModeButton />
                </HStack>
            </Flex>
        </Box>
    );
}
