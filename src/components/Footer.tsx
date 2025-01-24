import { Box, Container, Link, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box as="footer" id="contact" w="100%" py="4">
            <Container maxW="container.lg" textAlign="center">
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()} Recapeps. Tous droits réservés. Conception graphique <Link target="_blank" href="https://www.linkedin.com/in/nolwenn-bernier-bab022263/">Nolwenn Bernier</Link>
                </Text>
            </Container>
        </Box>
    );
}
