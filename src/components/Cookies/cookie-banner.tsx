import { useCookie } from "@/hooks/useCookie";
import { Button } from "../ui/button";
import { Card } from "@chakra-ui/react"

const CookieBanner = () => {
    const { setConsent, consentGiven } = useCookie();

    const handleConsent = (consent: boolean) => {
        setConsent(consent);
    };

    if (consentGiven != null) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 bg-background shadow-lg">
            <Card.Root className="max-w-md w-full">
                <Card.Header>Enregistre le consentement dans les cookies</Card.Header>
                <Card.Body className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Ce site utilise des cookies pour l'analyse et pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => handleConsent(false)} variant="outline">
                            Je refuse
                        </Button>
                        <Button onClick={() => handleConsent(true)}>
                            J'accepte
                        </Button>
                    </div>
                </Card.Body>
            </Card.Root>
        </div>
    );
};

export default CookieBanner;
