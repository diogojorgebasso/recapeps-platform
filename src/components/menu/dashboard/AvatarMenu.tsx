"use client"
import { signOut } from "@/lib/firebase/auth";
import { useAuth } from "@/contexts/Auth/useAuth";

import {
    Avatar,
    Menu,
    Portal,
    HStack,
} from "@chakra-ui/react";

import {
    LuBadge,
    LuLogOut,
    LuSparkles,
} from "react-icons/lu";
import Link from "next/link";
export default function AvatarMenu() {
    const { user, pro } = useAuth();

    return (
        <Menu.Root>
            <Menu.Trigger>
                <Avatar.Root>
                    <Avatar.Fallback name={user?.displayName ?? "Étudiant"} />
                    <Avatar.Image src={user?.photoURL ?? "/avatar.svg"} />
                </Avatar.Root>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="56" rounded="lg">
                        {pro && (
                            <>
                                <Menu.Item value="checkout" asChild >
                                    <Link href="/checkout">
                                        <HStack gap={2}>
                                            <LuSparkles />
                                            <span>Passer à Recap&apos;eps Pro</span>
                                        </HStack>
                                    </Link>
                                </Menu.Item>
                                <Menu.Separator />
                            </>
                        )}
                        <Menu.Item value="profil" asChild>
                            <Link href="/compte/profil">
                                <HStack gap={2}>
                                    <LuBadge />
                                    <span>Profil</span>
                                </HStack>
                            </Link>
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item value="logout" onClick={signOut}>
                            <HStack gap={2}>
                                <LuLogOut />
                                <span>Déconnexion</span>
                            </HStack>
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}