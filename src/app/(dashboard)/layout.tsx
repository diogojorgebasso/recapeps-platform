import type { ReactNode } from "react";
import { Suspense } from "react";

import {
    Flex,
    Box,
    Spinner,
} from "@chakra-ui/react";

import DesktopMenu from "@/components/menu/dashboard/DesktopMenu";
import MobileMenu from "@/components/menu/dashboard/MobileMenu";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <Flex minH="100vh">
            <Suspense fallback={<Spinner position="fixed" top={4} left={4} />}>
                <DesktopMenu />
                <MobileMenu />
            </Suspense>

            <Box
                flex="1"
                overflowY="auto"
                px={{ base: 4, md: 8 }}
                py={6}
                ml={{ md: "24", lg: "60" }}>
                {children}
            </Box>
        </Flex >
    );
}
