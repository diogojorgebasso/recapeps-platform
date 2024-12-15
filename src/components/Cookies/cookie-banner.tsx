import { useCookie } from "@/hooks/useCookie";
import { Button } from "../ui/button";
import { Card } from "@chakra-ui/react"

const CookieBanner = () => {
    const { setConsent, consentGiven } = useCookie();

    const handleConsent = (consent: boolean) => {
        setConsent(consent); // Salva o consentimento nos cookies
    };

    if (consentGiven != null) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 bg-background shadow-lg">
            <Card.Root className="max-w-md w-full">
                <Card.Header>Cookies</Card.Header>
                <Card.Body className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Este site utiliza cookies para análises e melhorar sua experiência. Aceita o uso de cookies?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => handleConsent(true)}>
                            Acepté
                        </Button>
                        <Button onClick={() => handleConsent(false)} variant="outline">
                            Refusé
                        </Button>
                    </div>
                </Card.Body>
            </Card.Root>
        </div>
    );
};

export default CookieBanner;
