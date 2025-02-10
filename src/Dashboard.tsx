import { useEffect, useState } from "react";
import {
    Box,
    Heading,
    Table,
    HStack,
    Button,

} from "@chakra-ui/react";
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
    timestamp: string;
};

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [quizData, setQuizData] = useState<QuizData[]>([]);

    useEffect(() => {
        const loadData = async () => {
            if (!currentUser) return;

            try {
                const data = await getUserQuizzes(currentUser.uid);
                setQuizData(data);
            } catch (error) {
                console.error("Erro ao carregar os quizzes:", error);
            }
        };

        loadData();
    }, [currentUser]);

    // Agrupamento por quizName
    const groupedByQuiz = quizData.reduce((acc, quiz) => {
        const quizName = quiz.quizName;
        if (!acc[quizName]) {
            acc[quizName] = {
                attempts: 0,
                highestScore: 0,
                lastAttemptDate: quiz.timestamp,
            };
        }

        acc[quizName].attempts += 1;
        acc[quizName].highestScore = Math.max(
            acc[quizName].highestScore,
            quiz.score
        );

        if (new Date(quiz.timestamp) > new Date(acc[quizName].lastAttemptDate)) {
            acc[quizName].lastAttemptDate = quiz.timestamp;
        }

        return acc;
    }, {} as Record<string, { attempts: number; highestScore: number; lastAttemptDate: string }>);

    // Dados para a tabela
    const tableData = Object.entries(groupedByQuiz).map(([quizName, stats]) => ({
        quizName,
        attempts: stats.attempts,
        highestScore: stats.highestScore,
        lastAttemptDate: stats.lastAttemptDate,
    }));

    // Dados para o gráfico
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
        return (<>

            <EmptyState
                icon={<HiColorSwatch />}
                title="Aucun résultat disponible"
                description="Commencez par faire un quiz pour voir vos résultats ici."
            >
                <HStack>
                    <Link to="/quiz">
                        <Button>Faire un quiz</Button>
                    </Link>
                    <Link to="/notes">
                        <Button variant="outline">Explorer les fiches</Button>
                    </Link>
                </HStack>
            </EmptyState>
        </>
        );
    }

    return (
        <Box>
            <Heading size="md" textAlign="center" mb={4}>
                Vos derniers résultats
            </Heading>
            <Box display="flex" justifyContent="center" mb={8}>
                <ResponsiveContainer width="50%" height={400}>
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
            </Box>
            <Box maxWidth="800px" mx="auto" py={8}>
                <Heading size="lg" textAlign="center" mb={6}>
                    Vos résultats de quiz
                </Heading>
                <Table.Root>
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
