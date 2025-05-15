import { Stack, Text, Container, HStack, Box } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <Container maxW="100%" color="white" as="footer" id="contact" bg="orange.500" py="4">
            <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                gap={{ base: 4, md: 2 }} // Add better spacing for mobile
            >
                <Text fontSize="sm">
                    &copy; 2025 Recap&apos;eps
                </Text>

                {/* Legal links - better grouped on mobile */}
                <Stack direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 4 }} align="center">
                    <Link color="white" href="/legal/mentions-legales">Mentions légales</Link>
                    <Link color="white" href="/legal/conditions-generales">Conditions générales de vente</Link>
                    <Link color="white" href="/legal/politique-confidentialite">Politique de confidentialité</Link>
                </Stack>

                {/* Social media icons */}
                <HStack gap={3}>
                    <a href="https://linkedin.com/company/recapeps" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="20px" />
                    </a>
                    <a href="https://instagram.com/recapeps" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size="20px" />
                    </a>
                </HStack>
            </Stack>
        </Container>
    );
}
