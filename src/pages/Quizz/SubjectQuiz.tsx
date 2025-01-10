import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchQuizzesBySubject } from "@/api/getQuizzesFromFirebase";
import { Quiz } from "@/types/Quizz";
import { saveUserQuiz } from "@/api/saveQuizToFirebase";
import { useAuth } from "@/hooks/useAuth";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress"

import {
    Box,
    Button,
    Card,
    Heading,
    Text,
    Badge,
    Stack,
    Center,
} from "@chakra-ui/react";


export default function QuizPage() {
    const router = useParams();
    const navigate = useNavigate();
    const { subjectId, exame } = router;

    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { uid } = useAuth();

    useEffect(() => {
        const loadQuiz = async () => {
            if (subjectId && exame && typeof subjectId === "string") {
                const fetchedQuizzes = await fetchQuizzesBySubject(exame, subjectId);
                setQuizzes(fetchedQuizzes);
            }
        };
        loadQuiz();
    }, [subjectId, exame]);

    useEffect(() => {
        const saveQuizIfFinished = async () => {
            if (isFinished && exame && subjectId && typeof subjectId === "string") {
                const result = {
                    subjectId: subjectId,
                    score: score,
                    totalQuestions: quizzes.length,
                    type: exame,
                    date: new Date().toISOString(),
                    questions: quizzes.map((quiz, index) => ({
                        questionId: quiz.id,
                        selectedAnswer: index < currentQuestion ? quizzes[index].answer : null,
                    })),
                };

                try {
                    await saveUserQuiz(uid, result);
                    console.log("Quiz salvo com sucesso!");
                } catch (error) {
                    console.error("Erro ao salvar o quiz:", error);
                }
            }
        };

        saveQuizIfFinished();
    }, [isFinished]);

    const handleAnswer = (selectedOption: string) => {
        setSelectedAnswer(selectedOption);
        if (selectedOption === quizzes[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizzes.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setIsFinished(true);
        }
    };

    if (!quizzes.length && !isFinished) {
        return (
            <Center w="100%" h="100vh">
                <Text fontSize="lg">Carregando Quiz...</Text>
            </Center>
        );
    }

    if (isFinished) {
        const performanceMessage =
            score / quizzes.length >= 0.7
                ? "Félicitations ! Vous avez bien réussi ce quiz ! Continuez à briller ! 🎉"
                : "Ne vous découragez pas ! Chaque erreur est une opportunité d'apprendre. Vous pouvez le faire ! 💪";

        return (
            <Center w="100%" h="100vh" p={4}>
                <Card.Root maxW="md" w="full" p={4} boxShadow="lg">
                    <Card.Header>
                        <Heading as="h2" textAlign="center" size="md">
                            Quiz Terminé !
                        </Heading>
                    </Card.Header>
                    <Card.Body>
                        <Text textAlign="center" fontSize="lg" mb={4}>
                            Votre Note: <strong>{score}</strong> / {quizzes.length}
                        </Text>
                        <Text textAlign="center" color="gray.600">
                            {performanceMessage}
                        </Text>
                        <Button
                            width="full"
                            mt={6}
                            colorScheme="blue"
                            onClick={() => navigate("/quizz")}
                        >
                            Retour aux Quiz
                        </Button>
                    </Card.Body>
                </Card.Root>
            </Center>
        );
    }

    // Lógica para a pergunta atual
    const currentQuiz = quizzes[currentQuestion];
    const progress = (currentQuestion / quizzes.length) * 100;

    return (
        <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center" p={4}>
            <Card.Root maxW="lg" w="full" boxShadow="lg" position="relative">
                <Card.Header>
                    <Heading as="h3" size="md" textAlign="center">
                        {currentQuiz.question}
                    </Heading>
                    <Badge
                        colorPalette="blue"
                        position="absolute"
                        top={2}
                        right={4}
                        fontSize="0.7em"
                    >
                        niveau: {currentQuiz.level}
                    </Badge>
                </Card.Header>
                <Card.Body>
                    <Stack gap={4}>
                        {currentQuiz.options.map((option, index) => {
                            // Define a cor do botão conforme a resposta selecionada
                            let colorScheme: string = "gray";
                            if (selectedAnswer) {
                                if (option === currentQuiz.answer) {
                                    colorScheme = "green";
                                } else if (option === selectedAnswer) {
                                    colorScheme = "red";
                                }
                            }

                            return (
                                <Button
                                    key={index}
                                    colorPalette={colorScheme}
                                    disabled={!!selectedAnswer}
                                    onClick={() => handleAnswer(option)}
                                    textAlign="left"
                                    whiteSpace="normal"
                                    wordBreak="break-word"
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </Stack>

                    <Box mt={4}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                            <Text fontSize="sm">{`${progress.toFixed(0)}%`}</Text>
                            <Text fontSize="sm">100%</Text>
                        </Box>
                        <ProgressRoot value={progress}>
                            <ProgressBar colorScheme="blue" borderRadius="md" />
                        </ProgressRoot>
                    </Box>

                    {selectedAnswer && (
                        <Button
                            mt={4}
                            w="full"
                            colorScheme="blue"
                            onClick={handleNextQuestion}
                        >
                            Question suivante
                        </Button>
                    )}
                </Card.Body>
            </Card.Root>
        </Box>
    );
}
