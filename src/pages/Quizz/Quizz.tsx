import { useEffect, useState } from "react";
import { fetchSubjects, fetchQuizzesBySubject, Subject, Quiz } from "@/api/getQuizzesFromFirebase";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Quizz() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const loadSubjects = async () => {
      const subjects = await fetchSubjects();
      setSubjects(subjects);
    };
    loadSubjects();
  }, []);

  const handleSubjectSelection = async (subjectId: string) => {
    const quizzes = await fetchQuizzesBySubject(subjectId);
    setQuizzes(quizzes);
    setCurrentSubject(subjectId);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizzes[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizzes.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const progress = (currentQuestion / quizzes.length) * 100;

  if (!currentSubject) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Select a Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {subjects.map((subject) => (
                <li key={subject.id}>
                  <Button className="w-full" onClick={() => handleSubjectSelection(subject.id)}>
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

  if (isFinished) {

    return (
      <div className="flex h-screen items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quiz Finished!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              Your score: <strong>{score}</strong> / {quizzes.length}
            </p>
            <Button className="w-full mt-4" onClick={() => setCurrentSubject(null)}>
              Back to Subjects
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizzes.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuestion];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* Barra de Progresso */}
      <Progress value={progress} />

      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-xl text-center">{currentQuiz.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {currentQuiz.options.map((option: string, index: number) => (
              <li key={index}>
                <Button className="w-full" onClick={() => handleAnswer(option)}>
                  {option}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Paginação */}
      <div className="mt-4 flex justify-between items-center w-full max-w-md">
        <Button
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </Button>
        <p>
          Question {currentQuestion + 1} / {quizzes.length}
        </p>
        <Button
          disabled={currentQuestion === quizzes.length - 1}
          onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, quizzes.length - 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
