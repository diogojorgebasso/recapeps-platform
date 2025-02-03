import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import {
    Box,
    Button,
    Card,
    Center,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router";

type Flashcard = {
    id: string;
    answer: string;
    question: string;
};

export default function FlashcardsSubject() {
    const { subjectId } = useParams();
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [subjectName, setSubjectName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFlashcards = async () => {
            if (!subjectId) return;
            setLoading(true);
            try {
                const querySnapshot = await getDocs(
                    collection(db, "subjects", subjectId, "flashcards")
                );
                const questions = querySnapshot.docs[0].data().questions
                setSubjectName(querySnapshot.docs[0].data().name)
                const flashcards = questions.map((questionObj: any, index: number) => ({
                    id: `question-${index}`,
                    ...questionObj,
                }));
                setFlashcards(flashcards);
            } catch (error) {
                console.error("Error fetching flashcards:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFlashcards();
    }, [subjectId]);

    if (loading) {
        return (
            <Center h="100vh">
                <Text>Chargement...</Text>
            </Center>
        );
    }

    if (!flashcards.length) {
        return (
            <Center h="100vh">
                <Text>Aucun flashcard trouvé pour ce sujet.</Text>
            </Center>
        );
    }

    if (currentPage === flashcards.length) {
        return (
            <Center h="100vh">
                <Card.Root w="md" p="6" textAlign="center">
                    <Card.Header>
                        <Heading>Félicitations!</Heading>
                    </Card.Header>
                    <Card.Body>
                        <Text fontSize="xl" mb="4">
                            Vous avez terminé toutes les flashcards.
                        </Text>
                        <Button
                            onClick={() => navigate("/flashcards")}
                            colorScheme="blue"
                            w="full"
                        >
                            Retour à tous les sujets
                        </Button>
                    </Card.Body>
                </Card.Root>
            </Center>
        );
    }

    const currentFlashcard = flashcards[currentPage];

    const handleNext = () => {
        if (currentPage < flashcards.length) {
            setCurrentPage(currentPage + 1);
        }
        setIsFlipped(false);
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        setIsFlipped(false);
    };



    return (
        <Box p="8">
            <Center>
                <VStack>
                    <Box>
                        <Heading as="h1" textAlign="center" mb="8">
                            {subjectName}
                        </Heading>
                        <Text>Retournes la carte pour vérifier tes connaissances.</Text>
                    </Box>
                    {currentFlashcard && (
                        <Flashcard
                            word={currentFlashcard.question}
                            explanation={currentFlashcard.answer}
                            isFlipped={isFlipped}
                            setIsFlipped={setIsFlipped}
                        />
                    )}
                </VStack>
            </Center>
            <Center mt="8">
                <Button
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                    colorScheme="gray"
                    mr="4"
                >
                    Précédent
                </Button>
                <Text>
                    {currentPage + 1} / {flashcards.length}
                </Text>
                <Button
                    onClick={handleNext}
                    disabled={currentPage === flashcards.length}
                    colorScheme="blue"
                    ml="4">
                    Suivant
                </Button>
            </Center>
        </Box>
    );
}

function Flashcard({
    word,
    explanation,
    isFlipped,
    setIsFlipped,
}: {
    word: string;
    explanation: string;
    isFlipped: boolean;
    setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <Box
            w="100%"
            h="200px"
            perspective="1000px"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <Box
                w="100%"
                h="100%"
                position="relative"
                transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
                transformStyle="preserve-3d"
                transition="transform 0.6s"
            >
                {/* Front Side */}
                <Card.Root
                    position="absolute"
                    w="100%"
                    h="100%"
                    backfaceVisibility="hidden"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="blue.500"
                    color="white"
                >
                    <Card.Body>
                        <Text textStyle={{ base: "sm", md: "3xl" }}>
                            {word}
                        </Text>
                    </Card.Body>
                </Card.Root>

                {/* Back Side */}
                <Card.Root
                    position="absolute"
                    w="100%"
                    h="100%"
                    backfaceVisibility="hidden"
                    transform="rotateY(180deg)"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="green.500"
                    color="white"
                >
                    <Card.Body>
                        <Text textStyle="4xl">
                            {explanation}
                        </Text>
                    </Card.Body>
                </Card.Root>
            </Box>
        </Box>
    );
}