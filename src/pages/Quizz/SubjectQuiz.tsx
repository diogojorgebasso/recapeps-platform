import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchQuizzesBySubject } from "@/api/getQuizzesFromFirebase";
import { Quiz } from "@/types/Quizz";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { saveUserQuiz } from "@/api/saveQuizToFirebase";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";

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
                console.log("Loading quiz for subject:", subjectId);
                const quizzes = await fetchQuizzesBySubject(exame, subjectId);
                setQuizzes(quizzes);
            }
        };
        loadQuiz();
    }, [subjectId]);

    useEffect(() => {
        const saveQuizIfFinished = async () => {
            if (isFinished && subjectId && typeof subjectId === "string") {
                const result = {
                    subjectId: subjectId,
                    score: score,
                    totalQuestions: quizzes.length,
                    date: new Date().toISOString(),
                    questions: quizzes.map((quiz, index) => ({
                        questionId: quiz.id,
                        selectedAnswer: index < currentQuestion ? quizzes[index].answer : null,
                    })),
                };
                console.log("Quiz result:", result);

                try {
                    await saveUserQuiz(uid, result);
                    console.log("Quiz saved successfully!");
                } catch (error) {
                    console.error("Error saving the quiz:", error);
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
            <div className="flex h-screen items-center justify-center">
                <p>Carregando Quiz...</p>
            </div>
        );
    }

    if (isFinished) {
        const performanceMessage =
            score / quizzes.length >= 0.7
                ? "Félicitations ! Vous avez bien réussi ce quiz ! Continuez à briller ! 🎉"
                : "Ne vous découragez pas ! Chaque erreur est une opportunité d'apprendre. Vous pouvez le faire ! 💪";
        return (
            <div className="flex h-screen items-center justify-center">
                <Card className="max-w-md w-full bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Quiz Terminé !</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center">
                            Votre Pontuation: <strong>{score}</strong> / {quizzes.length}
                        </p>
                        <p className="text-center mt-4 text-white-700">{performanceMessage}</p>
                        <Button
                            className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 transition"
                            onClick={() => navigate("/quizz")}
                        >
                            Retour aux Quiz
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const currentQuiz = quizzes[currentQuestion];
    const progress = (currentQuestion / quizzes.length) * 100;

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
            <Card className="max-w-lg w-full shadow-lg relative">
                <CardHeader>
                    <CardTitle className="text-xl text-center">{currentQuiz.question}</CardTitle>
                    <div className="absolute top-0 right-2">
                        <span className="bg-blue-500 text-white text-xs font-semibold px-2 rounded">
                            niveau: {currentQuiz.level}
                        </span>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {currentQuiz.options.map((option, index) => (
                            <li key={index}>
                                <Button
                                    variant={
                                        selectedAnswer
                                            ? option === currentQuiz.answer
                                                ? "success"
                                                : option === selectedAnswer
                                                    ? "destructive"
                                                    : "outline"
                                            : "outline"
                                    } className="w-full rounded-lg py-2 text-white shadow-md transition break-words"
                                    style={{
                                        whiteSpace: "normal", // Permite quebras de linha
                                        wordBreak: "break-word", // Quebra palavras longas
                                        lineHeight: "1.5rem", // Espaçamento entre as linhas
                                        height: "auto", // Permite que o botão ajuste sua altura
                                    }}
                                    disabled={!!selectedAnswer}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-2 flex">
                        <span>{progress.toFixed(0)}%</span>
                        <Progress value={40} />
                        <span>100%</span>
                    </div>
                    {selectedAnswer && (
                        <Button
                            className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 transition"
                            onClick={handleNextQuestion}
                        >
                            Question suivante
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
