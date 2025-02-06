import { Box, Container, Link, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box as="footer" id="contact" bg="orange.500" w="100%" py="4">
            <Container maxW="container.lg" textAlign="center">
                <Text color="white" fontSize="sm">
                    &copy; {new Date().getFullYear()} Recapeps. <Link color="white">Mentions légales </Link>.<Link color="white" href="/condition">Condition général de vente.</Link> Tous droits réservés. Conception graphique par <Link target="_blank" href="https://www.linkedin.com/in/nolwenn-bernier-bab022263/">Nolwenn Bernier</Link>
                </Text>
            </Container>
        </Box>
    );
}
