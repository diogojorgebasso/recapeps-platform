import { useEffect, useState } from "react";
import { fetchSubjects, fetchQuizzesBySubject } from "@/api/getQuizzesFromFirebase";
import { Subject, Quiz } from "@/types/Quizz";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { saveUserQuiz } from "@/api/saveQuizToFirebase";
import { useAuth } from "@/hooks/useAuth";

export default function Quizz() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { uid } = useAuth();

  // Fetch available subjects on mount
  useEffect(() => {
    const loadSubjects = async () => {
      const subjects = await fetchSubjects();
      setSubjects(subjects);
    };
    loadSubjects();
  }, []);

  // Save quiz when it's finished
  useEffect(() => {
    const saveQuizIfFinished = async () => {
      if (isFinished && currentSubject) {
        const result = {
          subjectId: currentSubject,
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
  }, [isFinished]); // Effect runs whenever `isFinished` changes

  // Handle subject selection
  const handleSubjectSelection = async (subjectId: string) => {
    const quizzes = await fetchQuizzesBySubject(subjectId);
    setQuizzes(quizzes);
    setCurrentSubject(subjectId);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  // Handle answer selection
  const handleAnswer = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === quizzes[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizzes.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true); // Mark quiz as finished
    }
  };

  // Calculate progress percentage
  const progress = (currentQuestion / quizzes.length) * 100;

  // Render subject selection screen
  if (!currentSubject) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="max-w-md w-full bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Choisir un thème</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {subjects.map((subject) => (
                <li key={subject.id}>
                  <Button
                    className="w-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition"
                    onClick={() => handleSubjectSelection(subject.id)}
                  >
                    {subject.name}
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render quiz finished screen
  if (isFinished) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="max-w-md w-full bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quiz Finished!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              Your score: <strong>{score}</strong> / {quizzes.length}
            </p>
            <Button
              className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => setCurrentSubject(null)}
            >
              Back to Subjects
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render quiz question screen
  const currentQuiz = quizzes[currentQuestion];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <Card className="max-w-lg w-full bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">{currentQuiz.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {currentQuiz.options.map((option, index) => (
              <li key={index}>
                <Button
                  className={`w-full rounded-lg py-2 text-white shadow-md transition break-words ${selectedAnswer
                    ? option === currentQuiz.answer
                      ? "bg-green-500"
                      : option === selectedAnswer
                        ? "bg-red-500"
                        : "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  disabled={!!selectedAnswer}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex">
            {progress.toFixed(0)}%
            <Progress value={progress} />
            100%
          </div>
          {selectedAnswer && (
            <Button
              className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={handleNextQuestion}
            >
              Next Question
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
