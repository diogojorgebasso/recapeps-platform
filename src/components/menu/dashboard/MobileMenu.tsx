"use client"
import { usePathname } from "next/navigation";
import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaPencilAlt, FaPencilRuler, FaHome } from "react-icons/fa"; //ecrit 1
import { RxChatBubble } from "react-icons/rx"; //oral 1
import { SlSpeech } from "react-icons/sl"
import AvatarMenu from "./AvatarMenu";

export default function MobileMenu() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <Box
            display={{ base: "block", md: "none" }}
            as="footer"
            pos="fixed"
            bottom={0}
            insetX={0}
            zIndex="sticky"
            bg='rgba(255,255,255,0.8)'
            _dark={{ bg: 'rgba(26,32,44,0.8)' }}
        >
            <HStack justify="space-around" py={2}>
                <Link href="/parcours/dashboard">
                    <FaHome size={26} />
                </Link>
                <Link href="/parcours/ecrit-1">
                    <FaPencilAlt size={26} />
                </Link>
                <Link href="/parcours/ecrit-2">
                    <FaPencilRuler size={26} />
                </Link>
                <Link href="/parcours/oral-1">
                    <RxChatBubble size={26} />
                </Link>
                <Link href="/parcours/oral-3">
                    <SlSpeech size={26} />
                </Link>
                <AvatarMenu />
            </HStack>

        </Box>
    );
}
