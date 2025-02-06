import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { HeaderNotes, Section, Sommaire, CTA } from "./formatter";
import { getBlogPage } from "@/api/getBlogPage";
import { useParams } from "react-router";

export default function DynamicPage() {
    const { subject } = useParams();
    const [pageData, setPageData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPage() {
            try {
                if (subject) {
                    const data = await getBlogPage(subject);
                    setPageData(data);
                } else {
                    setError("Subject is not defined.");
                }
            } catch (err) {
                setError("Erro ao carregar a página.");
            } finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [subject]);

    if (loading) return <Box>Chargement...</Box>;
    if (error) return <Box color="red.500">{error}</Box>;
    if (!pageData) return <Box>Page non trouvé.</Box>;

    return (
        <Box>
            <Box
                position="relative"
                width="100%"
                paddingTop="56.25%"
                boxShadow="0 2px 8px 0 rgba(63,69,81,0.16)"
                overflow="hidden"
            >
                <Box
                    as="iframe"
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="0"
                    left="0"
                    border="none"
                    padding="0"
                    margin="0"
                    src={pageData.canvaLien}
                    allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                />
            </Box>
            {/* Call To Action */}
            <CTA linkTo={pageData.ctaLink} />
        </Box>

    );
}
