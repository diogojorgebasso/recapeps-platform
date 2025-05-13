"use client";

import {
    Box,
    Flex,
    Text,
    Button,
    Menu,
    SimpleGrid,
    HStack,
    Portal,
    Icon,
    Float,
    Circle,
} from "@chakra-ui/react";
import { LuChevronDown, LuSparkles } from "react-icons/lu";
import Link from "next/link";
import ContextualAvatar from "./ContextualAvatar";
import { ColorModeButton } from "@/components/ui/color-mode";
import { FaPencilAlt, FaPencilRuler } from "react-icons/fa";
import { RxChatBubble } from "react-icons/rx";
import { SlSpeech } from "react-icons/sl";
import { getIsNotification } from "./getIsNotification";
import { FaBell } from "react-icons/fa";
import { useAuth } from "@/contexts/Auth";
import { useEffect, useState } from "react";

export default function DesktopMenu() {
    const { user } = useAuth();
    const [isNotification, setIsNotification] = useState(false);

    useEffect(() => {
        if (user) {
            getIsNotification(user.uid)
                .then(hasNotification => {
                    setIsNotification(hasNotification);
                })
                .catch(error => {
                    console.error("Failed to check notifications:", error);
                    setIsNotification(false);
                });
        } else {
            setIsNotification(false);
        }
    }, [user]);

    return (
        <Box
            display={{ base: "none", md: "flex" }}
            as="header"
            pos="sticky"
            top={0}
            bg="gray.100"
            _dark={{ bg: "gray.950" }}
            px={4}
            py={2}
            zIndex="sticky"
        >
            <Flex justify="space-between" width="100%" gap={8}>
                <HStack gap={8}>
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button
                                variant="ghost"
                                fontWeight="bold"
                            >
                                Fonctionnalités
                                <LuChevronDown />
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content p={4} shadow="lg" rounded="md" maxW="lg">
                                    <SimpleGrid columns={2} gap={4}>
                                        <Menu.Item value="dashboard" asChild>
                                            <Link href="/parcours/dashboard">
                                                <Text fontWeight="semibold">Tableau de bord</Text>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item value="ecrit-1" asChild>
                                            <Link href="/parcours/ecrit-1">
                                                <HStack gap={2}>
                                                    <FaPencilAlt />
                                                    <Text as="span">Écrit 1</Text>
                                                </HStack>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item value="ecrit-2" asChild>
                                            <Link href="/parcours/ecrit-2">
                                                <HStack gap={2}>
                                                    <FaPencilRuler />
                                                    <Text as="span">Écrit 2</Text>
                                                </HStack>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item value="oral-1" asChild>
                                            <Link href="/parcours/oral-1">
                                                <HStack gap={2}>
                                                    <RxChatBubble />
                                                    <Text as="span">Oral 1</Text>
                                                </HStack>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item value="oral-3" asChild>
                                            <Link href="/parcours/oral-3">
                                                <HStack gap={2}>
                                                    <SlSpeech />
                                                    <Text as="span">Oral 3</Text>
                                                </HStack>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item value="abonnement" asChild>
                                            <Link href="/abonnement">
                                                <HStack gap={2}>
                                                    <LuSparkles />
                                                    <Text as="span">Passer à Recap&apos;eps Pro</Text>
                                                </HStack>
                                            </Link>
                                        </Menu.Item>
                                    </SimpleGrid>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>

                    <Link href="/a-propos">
                        <Text fontSize="lg" fontWeight="bold">
                            À propos
                        </Text>
                    </Link>

                    <Link href="/contact">
                        <Text fontSize="lg" fontWeight="bold">
                            Contact
                        </Text>
                    </Link>
                </HStack>

                <HStack gap={4}>
                    <Link href="/compte/notifications">
                        <FaBell />
                        {isNotification && (
                            <Float placement="top-end" offsetX="1" offsetY="1">
                                <Circle
                                    bg="green.500"
                                    size="8px"
                                    outline="0.2em solid"
                                    outlineColor="bg"
                                />
                            </Float>)}
                    </Link>
                    <ContextualAvatar />
                    <ColorModeButton />
                </HStack>
            </Flex>
        </Box>
    );
}
