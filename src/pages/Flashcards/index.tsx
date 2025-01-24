import { useEffect, useState } from "react";
import { Subject } from "@/types/Subject";
import {
    Box,
    Card,
    SimpleGrid,
    Image,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster"
import { getSubjectsFlashcards } from "@/api/getSubjectsFlashcards";
import { addFlashcardsToFirestore } from "@/api/boilerPlateFlashcard";

export default function Home() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        const loadSubjects = async () => {
            const allSubjects = await getSubjectsFlashcards();
            setSubjects(allSubjects)
            if (allSubjects.length == 0) {
                toaster.create({
                    title: "Erreur innatendue",
                    description: "Nous rencontrons des difficultés avec notre serveur, veuillez recharger la page",
                    type: "error"
                })
            }
        }
        loadSubjects();

    }, []);


    return (
        <Box>
            <Toaster />
            <Box mb="12">
                <Button onClick={() => addFlashcardsToFirestore()} />
                <SimpleGrid columns={[1, 2, 3]} gap="6">
                    {subjects.map(({ id, name, image, premium }) => (
                        <ExamCard
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            premium={premium}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box >
    );
}

function ExamCard({
    id,
    name,
    image,
    premium
}: {
    id: string;
    name: string;
    image: string;
    premium: boolean;
}) {
    return (
        <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
            <Image src={image} alt={name} h="200px" w="full" />
            <Card.Body gap="2" p="4">
                <Card.Title>{name} {premium ? "🔒" : ""}</Card.Title>
            </Card.Body>
            <Card.Footer gap="2" p="4">
                <Button variant="solid" colorScheme="blue">
                    <Link to={`/flashcards/${id}`}>Voir plus</Link>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
