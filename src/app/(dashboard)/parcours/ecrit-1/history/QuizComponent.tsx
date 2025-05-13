"use client"

import Link from 'next/link';
import {
    Text,
    List,
    Flex,
    Spacer,
    Badge,
    Heading
} from '@chakra-ui/react';
import { QuizDone } from '@/types/Quiz';

export default function QuizComponent({ quizHistory }: { quizHistory: QuizDone[] }) {
    return (
        <>
            {
                quizHistory.length === 0 && (
                    <Text>Vous n&apos;avez pas encore fait de quiz.</Text>
                )
            }

            <List.Root gap={4} >
                {
                    quizHistory.map(({ id, name, score, completedAt }) => {
                        return (
                            <List.Item key={id} borderWidth="1px" borderRadius="lg" p={4} boxShadow="sm" bg="white">
                                <Flex alignItems="center"> {/* Use Chakra Flex for layout */}
                                    <Heading as="h2" size="md" fontWeight="semibold">{name}</Heading>
                                    <Spacer /> {/* Use Chakra Spacer */}
                                    <Badge
                                        size="lg"
                                        variant="subtle"
                                        colorPalette={score > 4 ? 'green' : 'red'} // Conditional color scheme
                                        fontWeight="bold"
                                    >
                                        {score} / 8
                                    </Badge>
                                </Flex>
                                <Text fontSize="sm" color="gray.500" mt={1}>
                                    Réalisé le: {completedAt.toDate().toLocaleDateString()}
                                </Text>
                                <Link href={`/ecrit-1/quiz/attempt/${id}`} color="blue.600">
                                    Revoir sa tentative
                                </Link>
                            </List.Item>
                        );
                    })
                }
            </List.Root >
        </>
    )
}