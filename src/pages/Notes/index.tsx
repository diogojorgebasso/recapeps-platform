import {
    Box,
    Button,
    Card,
    Heading,
    Input,
    SimpleGrid,
    VStack,
    Image,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { InputGroup } from "@/components/ui/input-group"
import { Rating } from "@/components/ui/rating"
import { Link } from "react-router";

export default function SearchAndCardsPage() {
    const examsEcrit1 = [
        { title: "La Mixité Sexuée", note: 4, image: "/ecrit-1-mixite_sexuee.jpg", description: "Description pour Examen A", link: "ecrit-1/la-mixite-sexuee" },
        { title: "Evaluation", note: 5, image: "ecrit-1-evaluation.jpg", description: "Description pour Examen B", link: "ecrit-1/evaluation" },
        { title: "Sciences", note: 3.5, image: "ecrit-1-science.jpg", description: "Description pour Examen C", link: "ecrit-1/sciences" },
        { title: "La Santé", note: 4, image: "ecrit-1-sante.png", description: "Description pour Examen C", link: "ecrit-1/la-sante" },
        { title: "Les techniques", note: 4, image: "ecrit-1-technique.jpg", description: "Description pour Examen C", link: "ecrit-1/les-techniques" },
        { title: "Sport Scolaire", note: 3.5, image: "ecrit-1-sport-scolaire.jpg", description: "Description pour Examen C", link: "ecrit-1/sport-scolaire" }
    ];

    const examsEcrit2 = [
        { title: "Usages du Numeriqe", note: 5, image: "https://via.placeholder.com/150", description: "Description pour Examen X", link: "ecrit-2/usages-du-numerique" },
        { title: "Apprentissages", note: 4.5, image: "https://via.placeholder.com/150", description: "Description pour Examen Y", link: "ecrit-2/apprentissages" },
        { title: "Compétition et performance", note: 5, image: "https://via.placeholder.com/150", description: "Description pour Examen Y", link: "ecrit-2/competition-et-performance" },
        { title: "Réussite - échec - erreur", note: 4, image: "https://via.placeholder.com/150", description: "Description pour Examen Y", link: "ecrit-2/reussite-echec-erreur" },
        { title: "Les Émotions", note: 3, image: "https://via.placeholder.com/150", description: 'Elle explore des définitions multidimensionnelles des émotions, soulignant leur rôle central dans la prise de décision (Damasio, 1995) et leur impact sur l’engagement scolaire. ', link: "ecrit-2/les-emotions" }
    ];

    return (
        <Box minH="100vh">
            <Box py="8" px="6" shadow="md" mb="12">
                <VStack gap="6" textAlign="center">
                    <Heading size="2xl" color="blue.500">
                        Recherchez un sujet, un examen ou un domaine d'étude.
                    </Heading>
                    <InputGroup flex="1" endElement={<FaSearch size="24" />}>
                        <Input placeholder="Tapez votre recherche ici..." />
                    </InputGroup>
                </VStack>
            </Box>

            {/* Seção Écrit 1 */}
            <Box p="4" mb="12">
                <Heading size="xl" mb="4" color="blue.600">
                    Écrit 1
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} gap="6">
                    {examsEcrit1.map((exam, index) => (
                        <ExamCard key={index} link={exam.link} title={exam.title} image={exam.image} description={exam.description} note={exam.note} />
                    ))}
                </SimpleGrid>
            </Box>

            <Box>
                <Heading size="xl" mb="4" color="blue.600">
                    Écrit 2
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} gap="6">
                    {examsEcrit2.map((exam, index) => (
                        <ExamCard key={index} link={exam.link} title={exam.title} image={exam.image} description={exam.description} note={exam.note} />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

// Componente de card para os exames
function ExamCard({
    title,
    image,
    description,
    note,
    link
}: {
    title: string;
    image: string;
    description: string;
    note: number;
    link: string;
}) {
    return (
        <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
            <Image src={image} alt={title} h="200px" w="400px" />
            <Card.Body gap="2" p="4">
                <Card.Title>{title}</Card.Title>
                <Rating allowHalf readOnly defaultValue={note} size="md" />
                <Card.Description>{description}</Card.Description>
            </Card.Body>
            <Card.Footer gap="2" p="4">
                <Button variant="solid" colorScheme="blue">
                    <Link to={link}>
                        Voir plus
                    </Link>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
