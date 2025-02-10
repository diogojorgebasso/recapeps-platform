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
                                    Tableau de bord
                                </Text>
                            </Link>
                            <Link to="/notes" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Fiches de révision
                                </Text>
                            </Link>
                            <Link to="/flashcards" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Flashcards
                                </Text>
                            </Link>
                            <Link to="/quiz" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Quiz
                                </Text>
                            </Link>
                            <Link to="/a-propos" >
                                <Text fontSize="lg" fontWeight="bold">
                                    À propos
                                </Text>
                            </Link>
                            <Link to="/contact" >
                                <Text fontSize="lg" fontWeight="bold">
                                    Contact
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
            <Box
                position="sticky"
                top={0}
                px={4}
                py={2}
                width="100%"
                zIndex="sticky"
                bg="gray.100"
                _dark={{ bg: "gray.950" }}
            >
                <Flex justify="space-between" width="100%">
                    <HStack gap={8}>
                        <Link to="/" >
                            <Text fontSize="lg" fontWeight="bold">
                                Accueil
                            </Text>
                        </Link>
                        <MenuRoot>
                            <MenuTrigger asChild>
                                <Button variant="plain" fontWeight="bold">
                                    <Text fontSize="lg">Fonctionnalités</Text> <FaChevronDown />
                                </Button>
                            </MenuTrigger>
                            <MenuContent p={4} boxShadow="lg" borderRadius="md" maxW="lg">
                                <SimpleGrid columns={2} gap={4}>
                                    <MenuItem value="dashboard" asChild>
                                        <Link to="/dashboard">
                                            <VStack align="start">
                                                <Text fontSize="sm" fontWeight="bold">
                                                    Tableau de bord
                                                </Text>
                                                <Text color="gray.500">
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
                                                    Fiches de révision
                                                </Text>
                                                <Text color="gray.500">
                                                    Nous t'avons fait une synthèse de tous les grands thèmes que tu peux rencontrer au concours.
                                                </Text>
                                            </VStack>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="flashcards" asChild>
                                        <Link to="/flashcards">
                                            <VStack align="start">
                                                <Text fontSize="sm" fontWeight="bold">
                                                    Flashcards
                                                </Text>
                                                <Text color="gray.500">
                                                    Retiens efficacement toutes les connaissances donc tu auras besoin pour les écrits.
                                                </Text>
                                            </VStack>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="quiz" asChild>
                                        <VStack align="start">
                                            <Link to="/quiz">
                                                <Text fontSize="sm" fontWeight="bold">
                                                    Quiz
                                                </Text>
                                                <Text color="gray.500">
                                                    Après avoir lu une fiche, fais des quiz associés pour voir si tu as bien compris et assimilé le cours !
                                                </Text>
                                            </Link>
                                        </VStack>
                                    </MenuItem>
                                </SimpleGrid>
                            </MenuContent>
                        </MenuRoot>
                        <Link to="/a-propos" >
                            <Text fontSize="lg" fontWeight="bold">
                                À propos
                            </Text>
                        </Link>
                        <Link to="/contact" >
                            <Text fontSize="lg" fontWeight="bold">
                                Contact
                            </Text>
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
