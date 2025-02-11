import { useCookie } from "@/hooks/useCookie";
import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

const CookieBanner = () => {
    const { setConsent, consentGiven } = useCookie();
    const handleConsent = (consent: boolean) => {
        setConsent(consent);
    };

    if (consentGiven != null) return null;

    return (
        <Box
            position="fixed"
            bottom="0"
            width="100%"
            py={4}
            px={6}
            zIndex={1000}
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
        >
            <Flex
                justify="space-between"
                align="center"
                direction={{ base: "column", md: "row" }}
            >
                <Text mb={{ base: 3, md: 0 }}>
                    Ce site utilise des cookies pour l'analyse et pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?
                </Text>
                <Flex gap={2}>
                    <Button onClick={() => handleConsent(false)} variant="outline">
                        Je refuse
                    </Button>
                    <Button onClick={() => handleConsent(true)} colorPalette="green">
                        J'accepte
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default CookieBanner;
