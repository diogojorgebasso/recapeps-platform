import {
    Box,
    Flex,
    HStack,
    Text,
    SimpleGrid,
    VStack,
    useBreakpointValue,
    DrawerHeader
} from "@chakra-ui/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import ContextualAvatar from "./ContextualAvatar";
import { ColorModeButton } from "../ui/color-mode";
import { FaChevronDown } from "react-icons/fa";

import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { FaBars } from "react-icons/fa";

export default function Menu() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        return (
            <DrawerRoot placement="top">
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <Button variant="outline" size="sm">
                        <FaBars />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerCloseTrigger />
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack gap={4} mt={8} align="center">
                            <Link to="/dashboard" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Tableau de Bord
                                </Text>
                            </Link>
                            <Link to="/notes" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Notes
                                </Text>
                            </Link>
                            <Link to="/flashcards" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Cartes Mémoire
                                </Text>
                            </Link>
                            <Link to="/quizz" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Quizz
                                </Text>
                            </Link>
                            <Link to="/contact" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Contact
                                </Text>
                            </Link>
                            <Link to="/about" >
                                <Text fontSize="lg" fontWeight="bold">
                                    À Propos
                                </Text>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerRoot >
        )
    }
    else {
        return (
            <Box position="fixed" px={4} py={2} width="100%">
                <Flex justify="space-between" width="100%">
                    <HStack gap={4}>
                        <MenuRoot>
                            <MenuTrigger asChild>
                                <Button variant="plain" fontWeight="bold">
                                    Fonctionnalités <FaChevronDown />
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

                        <Link to="/contact">
                            <Text fontWeight="bold">Contact</Text>
                        </Link>
                        <Link to="/about">
                            <Text fontWeight="bold">À Propos</Text>
                        </Link>
                    </HStack>

                    <HStack gap={4} ml="auto">
                        <ContextualAvatar />
                        <ColorModeButton />
                    </HStack>
                </Flex>
            </Box>
        );
    }

}
