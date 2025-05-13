'use client';

import {
    Box, Circle, Flex, Text, VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { buildSkillTree, SkillNode } from './buildSkillTree';
import { QuizTrail } from '@/types/TreeSkill';
const COLOUR: Record<SkillNode['state'], string> = {
    completed: 'green.400',
    retry: 'orange.400',
    doing: 'yellow.400',
    unlocked: 'blue.400',
    locked: 'gray.300',
};

export default function SkillTreeClient({ quizzes }: { quizzes: QuizTrail[] }) {
    const tree = buildSkillTree(quizzes);
    const subjects = Object.keys(tree);

    const circleSize = { base: '48px', md: '64px' };
    const flexGap = { base: 3, md: 4 };

    return (
        <Box maxW="100%" overflowX="auto" p={4}>
            <VStack align="stretch" gap={0}>
                {subjects.map((subject, rowIdx) => (
                    <Flex key={subject} align="center" pos="relative" py={{ base: 3, md: 4 }}>
                        {/* subject name */}
                        <Text
                            flexShrink={0}
                            w={{ base: '120px', md: '160px' }}
                            fontWeight="bold"
                            fontSize={{ base: 'sm', md: 'md' }}
                        >
                            {subject}
                        </Text>

                        {/* long horizontal line */}
                        <Box flex="1" h="2px" bg="gray.300" mr={flexGap} pos="relative">
                            {/* stub on the left to mimic a “branch” */}
                            <Box pos="absolute" left="-2px" top="-6px" w="2px" h="calc(100% + 12px)" bg="gray.300" />
                        </Box>

                        {/* three circles */}
                        <Flex gap={flexGap}>
                            {tree[subject].map((node, colIdx) => {
                                const isClickable = node.state !== 'locked' && node.id;

                                const Pill = (
                                    <Circle
                                        size={circleSize}
                                        bg={COLOUR[node.state]}
                                        color={node.state === 'locked' ? 'gray.500' : 'white'}
                                        shadow="md"
                                        _hover={
                                            isClickable
                                                ? { filter: 'brightness(1.1)', cursor: 'pointer' }
                                                : { cursor: 'not-allowed' }
                                        }
                                        as={isClickable ? 'a' : 'div'}
                                    >
                                        <Text fontWeight="bold">{node.level}</Text>
                                    </Circle>
                                );

                                return (
                                    <Flex key={`${subject}-${node.level}`} dir="column" align="center">
                                        {isClickable ? (
                                            <Link href={`/parcours/ecrit-1/quiz/${node.id}`} passHref>
                                                {Pill}
                                            </Link>
                                        ) : (
                                            Pill
                                        )}

                                        {/* vertical connector to the next subject’s first node */}
                                        {rowIdx < subjects.length - 1 && colIdx === 0 && (
                                            <Box w="2px" h={{ base: '24px', md: '32px' }} bg="gray.300" />
                                        )}
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
}
