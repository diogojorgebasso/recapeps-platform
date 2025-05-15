import { ReactNode } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function DocsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Flex minH="100vh" >
            <Box
                as="aside"
                w="64"
                p={4}
                borderRight="1px solid #e2e8f0"
                position="sticky"
                top="0"
                h="100vh"
                overflowY="auto"
            >

                <VStack align="start" gap={3} >
                    <Link href="#accroche" > Accroche </Link>
                    <Link href="#definitions" > Définitions </Link>
                    <Link href="#problematique" > Problématique </Link>
                    <Link href="#plan-detaille" > Plan détaillé </Link>
                    <Link href="#conclusion" > Conclusion </Link>
                </VStack>
            </Box>
            < Box flex="1" p={6} >
                {children}
            </Box >
        </Flex>
    );
}
