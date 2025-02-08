import { Stack, Link, Text, Container } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container maxW="100%" color="white" as="footer" id="contact" bg="orange.500" py="4">
            <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()} Recap'eps
                </Text>
                <Link color="white" href="/legal/mentions-legales" >Mentions légales</Link>
                <Link color="white" href="/legal/condition-generale">Conditions générales de vente</Link>
                <Link color="white" href="/legal/politique-confidentialite">Politique de confidentialité</Link>
                <Text>Conception graphique par <Link color="white" target="_blank" href="https://www.linkedin.com/in/nolwenn-bernier-bab022263/">Nolwenn Bernier</Link></Text>
            </Stack>
        </Container>
    );
}
