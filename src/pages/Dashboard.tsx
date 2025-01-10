
import { useEffect, useState } from "react";
import {
    Box,
    Heading,
    HStack,
    Table,
} from "@chakra-ui/react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { fetchUserQuizzes } from "@/api/getUsersQuizzes";
import { useAuth } from "@/hooks/useAuth";

type QuizData = {
    id: string;
    score: number;
    quizName: string;
    type: string;
    timestamp: string;
};

export default function Dashboard() {
    const { uid, isLoadedAuth } = useAuth();
    const [quizData, setQuizData] = useState<QuizData[]>([]);

    const loadData = async () => {
        if (uid) {
            const data = await fetchUserQuizzes(uid);
            setQuizData(data);
        }
    };

    useEffect(() => {
        loadData();
    }, [uid, isLoadedAuth]);

    console.log(quizData);

    const groupedByType = quizData.reduce((acc, quiz) => {
        const type = quiz.type
        if (!acc[type]) {
            acc[type] = {};
        }

        if (!acc[type][quiz.quizName]) {
            acc[type][quiz.quizName] = {
                attempts: 0,
                highestScore: 0,
                lastAttemptDate: quiz.timestamp,
            };
        }

        // Incrementa o número de tentativas
        acc[type][quiz.quizName].attempts += 1;

        // Atualiza o maior score
        acc[type][quiz.quizName].highestScore = Math.max(
            acc[type][quiz.quizName].highestScore,
            quiz.score
        );

        if (
            new Date(quiz.timestamp) >
            new Date(acc[type][quiz.quizName].lastAttemptDate)
        ) {
            acc[type][quiz.quizName].lastAttemptDate = quiz.timestamp;
        }

        return acc;
    }, {} as Record<string, Record<string, { attempts: number; highestScore: number; lastAttemptDate: string }>>);


    const ecrit1Data = groupedByType["ecrit-1"] || {};
    const ecrit2Data = groupedByType["ecrit-2"] || {};

    const ecrit1ChartData = Object.entries(ecrit1Data).map(([quizName, data]) => ({
        quizName,
        attempts: data.attempts,
        highestScore: data.highestScore,
        lastAttemptDate: data.lastAttemptDate,
    }));

    const ecrit2ChartData = Object.entries(ecrit2Data).map(([quizName, data]) => ({
        quizName,
        attempts: data.attempts,
        highestScore: data.highestScore,
        lastAttemptDate: data.lastAttemptDate,
    }));

    const tableData = Object.entries(groupedByType).flatMap(([type, quizzes]) =>
        Object.entries(quizzes).map(([quizName, stats]) => ({
            type, // Inclui o tipo no registro da tabela
            quizName,
            attempts: stats.attempts,
            highestScore: stats.highestScore,
            lastAttemptDate: stats.lastAttemptDate,
        }))
    );


    return (
        <div>
            <Heading size="md" textAlign="center" mb={4}>
                Vos derniers résultats
            </Heading>

            <HStack>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={ecrit1ChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="quizName"
                            label={{
                                position: "insideBottom",
                                offset: -5,
                            }}
                        />
                        <YAxis
                            label={{
                                value: "Score",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: "5px",
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#4caf50"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={ecrit2ChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="quizName"
                            label={{
                                position: "insideBottom",
                                offset: -5,
                            }}
                        />
                        <YAxis
                            label={{
                                value: "Score",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: "5px",
                                border: "none",
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#4caf50"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </HStack>


            <Box maxWidth="800px" mx="auto" py={8}>
                <Heading size="lg" textAlign="center" mb={6}>
                    Vos résultats des quizzes
                </Heading>
                <Box overflowX="auto">
                    <Table.Root colorScheme="gray" size="sm">
                        <Table.Header>
                            <Table.Header>
                                <Table.ColumnHeader>Matière</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="center">Tentatives</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="center">Meilleure Note</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="center">Date Dernière Tentative</Table.ColumnHeader>
                            </Table.Header>
                        </Table.Header>
                        <Table.Body>
                            {tableData.map((row, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{row.quizName}</Table.Cell>
                                    <Table.Cell textAlign="center">{row.attempts}</Table.Cell>
                                    <Table.Cell textAlign="center">{row.highestScore}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {new Date(row.lastAttemptDate).toLocaleDateString("fr-FR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </Box>
        </div >
    )
}