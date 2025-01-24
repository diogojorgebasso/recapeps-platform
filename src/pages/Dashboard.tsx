import { useEffect, useState } from "react";
import {
    Box,
    Heading,
    Table,
    HStack,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { HiColorSwatch } from "react-icons/hi";
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
import { getUserQuizzes } from "@/api/getUsersQuizzes";
import { useAuth } from "@/hooks/useAuth";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "react-router";

type QuizData = {
    id: string;
    score: number;
    quizName: string;
    type: string;
    timestamp: string;
};

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [quizData] = useState<QuizData[]>([]);

    useEffect(() => {
        const loadData = async () => {
            if (!currentUser) return;
            const data = await getUserQuizzes(currentUser.uid);
            console.log(data);
        };
        loadData();
    }, [currentUser]);

    // Organizar dados por tipo e quiz
    const groupedByType = quizData.reduce((acc, quiz) => {
        const type = quiz.type;
        if (!acc[type]) acc[type] = {};

        if (!acc[type][quiz.quizName]) {
            acc[type][quiz.quizName] = {
                attempts: 0,
                highestScore: 0,
                lastAttemptDate: quiz.timestamp,
            };
        }

        acc[type][quiz.quizName].attempts += 1;
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

    // Dados para tabela
    const tableData = Object.entries(groupedByType).flatMap(([type, quizzes]) =>
        Object.entries(quizzes).map(([quizName, stats]) => ({
            type,
            quizName,
            attempts: stats.attempts,
            highestScore: stats.highestScore,
            lastAttemptDate: stats.lastAttemptDate,
        }))
    );

    // Dados para gráfico
    const ChartData = quizData.map((quiz) => ({
        quizName: quiz.quizName,
        score: quiz.score,
        timestamp: new Date(quiz.timestamp).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "short",
            day: "numeric",
        }),
    }));

    if (quizData.length === 0) {
        return (
            <EmptyState
                icon={<HiColorSwatch />}
                title="Aucun résultat disponible"
                description="Commencez par faire un quiz pour voir vos résultats ici."
            >
                <HStack>
                    <Link to="/quizz">
                        <Button>Faire un quiz</Button>
                    </Link>
                    <Link to="/notes">
                        <Button variant="outline">Regarder les notes</Button>
                    </Link>
                </HStack>
            </EmptyState>
        );
    }

    return (
        <Box>
            {/* Gráfico */}
            <Heading size="md" textAlign="center" mb={4}>
                Vos derniers résultats
            </Heading>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={ChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quizName" label={{ position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
                    <Tooltip contentStyle={{ borderRadius: "5px" }} />
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

            {/* Tabela */}
            <Box maxWidth="800px" mx="auto" py={8}>
                <Heading size="lg" textAlign="center" mb={6}>
                    Vos résultats des quizzes
                </Heading>
                <Table.Root colorScheme="gray" size="sm">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Matière</Table.ColumnHeader>
                            <Table.ColumnHeader>Tentatives</Table.ColumnHeader>
                            <Table.ColumnHeader>Meilleure Note</Table.ColumnHeader>
                            <Table.ColumnHeader>Dernière Tentative</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableData.map((row, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{row.quizName}</Table.Cell>
                                <Table.Cell>{row.attempts}</Table.Cell>
                                <Table.Cell>{row.highestScore}</Table.Cell>
                                <Table.Cell>
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
    );
}
