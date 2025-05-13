"use client";

import {
  Box, Button, Card, Heading, Text, Stack, Center,
  Progress, Flex, Accordion,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getQuizForAttempt } from "@/services/QuizService";

import { AttemptQuiz, AttemptedQuestion, QuizAttemptDonePayload } from "@/types/Quiz";
import { useAuth } from "@/contexts/Auth/useAuth";
import { saveQuizResultsAction } from "./getData";
import { Toaster, toaster } from "@/components/ui/toaster";

enum QuizState {
  QUESTION_DISPLAY,
  QUESTION_FEEDBACK,
  QUIZ_COMPLETED,
}

export default function QuizComponent({ quizId }: { quizId: string }) {
  const { user } = useAuth();
  const router = useRouter();
  const [quiz, setQuiz] = useState<AttemptQuiz | undefined>();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [sel, setSel] = useState<string[]>([]);
  const [state, setState] = useState<QuizState>(QuizState.QUESTION_DISPLAY);
  const [start, setStart] = useState(Date.now());
  const [results, setResults] = useState<AttemptedQuestion[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const uid = user?.uid;

    if (!uid) return;

    async function fetchQuiz() {
      try {
        const attemptQuiz = await getQuizForAttempt(1, quizId, uid ?? ""); //TODO : remove hardcoded string
        setQuiz(attemptQuiz);
        setIdx(attemptQuiz.lastQuestion ?? 0);
        setScore(attemptQuiz.score ?? 0);
        setState(
          attemptQuiz.questions.length ? QuizState.QUESTION_DISPLAY : QuizState.QUIZ_COMPLETED,
        );
      } catch (err) {
        console.error("Failed to fetch quiz data", err);
      }
    }
    fetchQuiz();
  }, [quizId, user?.uid]);

  if (!user) {
    return (
      <Center h="100vh" p={4}>
        <Heading size="md" mb={4}>Quiz non trouvé</Heading>
        <Text mb={2}>Veuillez vous connecter pour accéder au quiz.</Text>
        <Button w="full" mt={6} onClick={() => router.back()}>
          Retour aux sujets
        </Button>
      </Center>
    );
  }

  if (!quiz) {
    return (
      <Center h="100vh" p={4}>
        <Text>Chargement du quiz...</Text>
      </Center>
    );
  }

  const currentQ = quiz.questions[idx];
  const progress = ((idx + 1) / quiz.questions.length) * 100;

  const colour = (answerId: string, isCorrect: boolean) => {
    if (state === QuizState.QUESTION_DISPLAY) {
      return sel.includes(answerId) ? "blue" : "gray";
    }
    /** After feedback → traffic-light palette                             */
    if (isCorrect) return "green";
    if (sel.includes(answerId) && !isCorrect) return "red";
    return "gray";
  };

  const buildAttempt = (time: number): AttemptedQuestion => ({
    ...currentQ,
    userSelectedAnswerId: sel,
    isSelectionCorrect: currentQ.answers
      .filter(a => a.isCorrect)
      .every(a => sel.includes(a.id)),
    timeSpentOnQuestion: time,
  });

  /* ───────────────────────────────────────────────────── *
   *  4 ▸  CHECK ANSWER  (first click)
   * ───────────────────────────────────────────────────── */
  const handleCheck = () => {
    const time = Date.now() - start;
    const attempt = buildAttempt(time);

    setResults(prev => [...prev, attempt]);

    if (attempt.isSelectionCorrect) setScore(s => s + 1);
    setState(QuizState.QUESTION_FEEDBACK);
  };

  /* ───────────────────────────────────────────────────── *
   *  5 ▸  NEXT QUESTION  (second click)
   * ───────────────────────────────────────────────────── */
  const handleNext = async () => {

    if (idx + 1 < quiz.questions.length) {
      setIdx(i => i + 1);
      setSel([]);
      setStart(Date.now());
      setState(QuizState.QUESTION_DISPLAY);
      return;
    }

    /* ─── All done → save once ───────────────────────── */
    setState(QuizState.QUIZ_COMPLETED);
    setSaving(true);

    const payload: QuizAttemptDonePayload = {
      id: quiz.id,
      score,
      questions: results as AttemptedQuestion[],
    };

    const { success, error } = await saveQuizResultsAction(payload, user?.uid);
    setSaving(false);

    success
      ? toaster.create({ title: "Résultats enregistrés !", type: "success" })
      : toaster.create({ title: "Erreur d'enregistrement", description: error, type: "error" });
  };

  /* ───────────────────────────────────────────────────── *
   *  6 ▸  RENDER END-OF-QUIZ CARD
   * ───────────────────────────────────────────────────── */
  if (state === QuizState.QUIZ_COMPLETED) {
    return (
      <Center h="100vh" p={4}>
        <Card.Root maxW="md" w="full">
          <Card.Body>
            <Heading size="md" mb={4}>Quiz terminé !</Heading>
            <Text mb={2}>Score&nbsp;: {score}/{quiz.questions.length}</Text>
            <Button w="full" mt={6} onClick={() => router.back()} disabled={saving}>
              Retour aux sujets
            </Button>
          </Card.Body>
        </Card.Root>
      </Center>
    );
  }

  /* ───────────────────────────────────────────────────── *
   *  7 ▸  QUESTION VIEW
   * ───────────────────────────────────────────────────── */
  return (
    <>
      <Toaster />
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={4}>
        <Card.Root maxW="2xl" w="full">
          <Card.Body>
            <Heading size="md" mb={4}>{currentQ.question}</Heading>

            <Stack gap={3}>
              {currentQ.answers.map(a => (
                <Button key={a.id}
                  variant={sel.includes(a.id) ? "solid" : "outline"}
                  colorPalette={colour(a.id, a.isCorrect)}
                  justifyContent="flex-start"
                  whiteSpace="normal"
                  onClick={() => state === QuizState.QUESTION_DISPLAY && setSel([a.id])}
                >
                  {a.answer}
                </Button>
              ))}
            </Stack>

            {/* Feedback accordion */}
            {state === QuizState.QUESTION_FEEDBACK && currentQ.explanation && (
              <Accordion.Root>
                <Accordion.Item value="feedback">
                  <Accordion.ItemTrigger>
                    <h2>Explication</h2>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemBody>
                    {currentQ.explanation}
                  </Accordion.ItemBody>
                </Accordion.Item>
              </Accordion.Root>
            )}

            {/* Footer: progress + buttons */}
            <Box mt={6}>
              <Flex justify="space-between" mb={1}>
                <Text fontSize="xs" color="gray.600">
                  Question {idx + 1} / {quiz.questions.length}
                </Text>
                <Text fontSize="xs" color="gray.600">{progress.toFixed(0)} %</Text>
              </Flex>
              <Progress.Root value={progress} size="sm" borderRadius="md" colorPalette="blue">
                <Progress.Track />
              </Progress.Root>
            </Box>

            <Flex mt={6} direction={{ base: "column", sm: "row" }} gap={3}>
              {/* Left button is either “Vérifier” or “Continuer” */}
              {state === QuizState.QUESTION_DISPLAY ? (
                <Button
                  flex={2} colorPalette="blue"
                  onClick={handleCheck}
                  disabled={sel.length === 0}
                >
                  Vérifier
                </Button>
              ) : (
                <Button
                  flex={2} colorPalette="blue"
                  onClick={handleNext}
                  loading={saving}
                >
                  {idx + 1 === quiz.questions.length ? "Terminer le quiz" : "Question suivante"}
                </Button>
              )}
            </Flex>
          </Card.Body>
        </Card.Root>
      </Box >
    </>
  );
}
