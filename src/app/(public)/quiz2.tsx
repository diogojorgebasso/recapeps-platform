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
        question: "En EPS on retrouve … compétences travaillées en continuité sur les différents cycles ",
        options: [
            "3", "5", "7", "9"
        ],
        correctAnswer: "5",
    },
    {
        question: "Comment le S4C (2015) définit-il une compétence ?",
        options: ["L’aptitude à mobiliser ses ressources pour accomplir une tâche ou faire face à une situation complexe ou inédite", "Une action reproductible dans toutes les situations ", "Une capacité spécifique à une discipline donnée", "Une qualité qui ne se développe que par la répétition "],
        correctAnswer: "L’aptitude à mobiliser ses ressources pour accomplir une tâche ou faire face à une situation complexe ou inédite",
    },
    {
        question: "En quoi consiste une compétence sociale en EPS?",
        options: ["Jouer individuellement et interagir avec les autres", "Exécuter les consignes sans réfléchir", "Partager des règles, assumer des rôles et des responsabilités ", "Se concentrer sur sa propre performance"],
        correctAnswer: "Partager des règles, assumer des rôles et des responsabilités",
    },
    {
        question: "Quels sont les trois types de compétences abordées en EPS ?",
        options: [
            "Physiques, techniques et théoriques",
            "Personnelles, scolaires et sportives ",
            "Rapides, lentes et moyennes",
            "Motrices, méthodologiques et sociales",
        ],
        correctAnswer: "Motrices, méthodologiques et sociales",
    },
    {
        question: "Quelle est la première compétence travaillée en EPS selon le BO 2015 ?",
        options: [
            "Développer sa motricité et construire un langage du corps",
            "Apprendre les règles de tous les sports",
            "Se spécialiser dans une discipline",
            "Développer uniquement l’endurance",
        ],
        correctAnswer: "Développer sa motricité et construire un langage du corps",
    },
];

export default function QuizComponent2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const question = questions[currentQuestion];
    const isCorrect = selectedOption === question.correctAnswer;
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
                    Si tu souhaites accéder à plus de contenu et enregistrer ta progression, tu peux créer ton compte juste ici 😎
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
                            <Text whiteSpace="normal"
                                wordBreak="break-word"
                                overflowWrap="break-word"> {option}</Text>
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
