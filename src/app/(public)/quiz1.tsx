'use client';

import {
    Box,
    Button,
    Flex,
    Progress,
    Text,
    VStack,
    Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const questions = [
    {
        question: "L’OMS définit la santé comme un bien-être :",
        options: [
            "Physique, mental, social",
            "Physique, psychologique, familial",
            "Familial, amical, personnel",
            "Psychologique, moteur, social",
        ],
        correctAnswer: "Physique, mental, social",
    },
    {
        question: "Jusqu’aux années 60, la santé est principalement considérée comme :",
        options: ["Physique", "Mentale", "Sociale", "Psychologique"],
        correctAnswer: "Physique",
    },
    {
        question: "Les groupes d’élèves établis avec les IO de 1945 prennent en compte la santé :",
        options: ["Motrice", "Physiologique", "Psychologique", "Sociale"],
        correctAnswer: "Physiologique",
    },
    {
        question: "Les Lendits, relancés dans les années 1930, étaient :",
        options: [
            "Des compétitions sportives scolaires",
            "Des activités centrées sur les sports de combat",
            "Des rassemblements collectifs de plein air",
            "Des épreuves exclusivement médicales",
        ],
        correctAnswer: "Des rassemblements collectifs de plein air",
    },
    {
        question: "Le rapport d’Helsinki (1999) souligne que l’activité physique :",
        options: [
            "Doit être réservée à l’élite sportive",
            "A une importance pour la santé, l’éducation et la culture",
            "Doit être centrée sur les capacités physiques individuelles",
            "Est uniquement une pratique compétitive",
        ],
        correctAnswer: "A une importance pour la santé, l’éducation et la culture",
    },
];

export default function QuizComponent1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const question = questions[currentQuestion];
    const progress = (currentQuestion / questions.length) * 100;

    const handleOptionClick = (option: string) => {
        if (!showAnswer) {
            setSelectedOption(option);
        }
    };

    const handleValidation = () => {
        if (selectedOption === question.correctAnswer) {
            setScore((prev) => prev + 1);
        }
        setShowAnswer(true);
    };

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedOption(null);
            setShowAnswer(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <Box
                textAlign="center"
                p={6}

                rounded="xl"
                shadow="md"
                w={{ base: "90%", md: "600px" }}
                padding={4}
            >
                <Heading size="lg" mb={4}>Quiz terminé !</Heading>
                <Text fontSize="xl" fontWeight="semibold" mb={4}>
                    Votre score : <Text as="span" fontWeight="bold">{score} / {questions.length}</Text>
                </Text>
                <Text mb={8}>
                    Si tu souhaites accéder à plus de contenu et suivre ta progression, tu peux créer ton compte juste ici 😎
                </Text>
                <Button colorPalette="blue" onClick={() => window.location.href = '/quiz'}>
                    Créer un compte
                </Button>
            </Box>
        );
    }

    return (
        <Box w={{ base: "90%", md: "600px" }}
            mx="auto"
            p={4}
            overflow="hidden">
            <Flex justify="space-between" mb={2}>
                <Text fontSize="sm" color="gray.500">
                    Niveau : {1}
                </Text>
            </Flex>

            <Heading as="h2" size="md" mb={4}>
                <Box maxW="100%" >
                    <Text whiteSpace="normal"
                        wordBreak="break-word"
                        overflowWrap="break-word"
                        fontSize={"lg"} >
                        {question.question}
                    </Text>
                </Box>
            </Heading>

            <VStack gap={3} align="stretch">
                {question.options.map((option) => {
                    let bg = 'gray.800';
                    if (showAnswer) {
                        if (option === question.correctAnswer) {
                            bg = 'green.500';
                        } else if (option === selectedOption) {
                            bg = 'red.500';
                        }
                    } else if (option === selectedOption) {
                        bg = 'blue.500';
                    }

                    return (
                        <Button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            bg={bg}
                            color="white"
                            _hover={{ bg }}
                            disabled={showAnswer}
                            py={6}
                            borderRadius="md"
                            fontSize="md"
                            fontWeight="medium"
                        >
                            {option}
                        </Button>
                    );
                })}
            </VStack>

            <Box mt={6}>
                <Flex justify="space-between" fontSize="xs" mb={1}>
                </Flex>
                <Progress.Root value={progress} size="sm" colorPalette="blue" borderRadius="md" >
                    <Progress.Track>
                        <Progress.Range />
                    </Progress.Track>
                    <Progress.ValueText />
                </Progress.Root>
            </Box>

            <Button
                mt={6}
                colorPalette={showAnswer ? 'green' : 'blue'}
                width="100%"
                onClick={showAnswer ? handleNext : handleValidation}
                disabled={!selectedOption && !showAnswer}
            >
                {showAnswer ? 'Suivant' : 'Valider'}
            </Button>
        </Box>
    );
};
