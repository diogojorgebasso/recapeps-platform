import { useEffect, useState } from "react";
import {
  Box,
  Heading,
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
  timestamp: string;
};

export default function UserQuizScoresChart() {
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const { uid } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      if (uid) {
        const data = await fetchUserQuizzes(uid);
        setQuizData(data);
      }
    };

    loadData();
  }, [uid]);

  const groupedData = quizData.reduce((acc, quiz) => {
    if (!acc[quiz.quizName]) {
      acc[quiz.quizName] = {
        attempts: 0,
        highestScore: 0,
        lastAttemptDate: quiz.timestamp,
      };
    }

    acc[quiz.quizName].attempts += 1;
    acc[quiz.quizName].highestScore = Math.max(
      acc[quiz.quizName].highestScore,
      quiz.score
    );
    acc[quiz.quizName].lastAttemptDate = quiz.timestamp;

    return acc;
  }, {} as Record<string, { attempts: number; highestScore: number; lastAttemptDate: string }>);

  const tableData = Object.entries(groupedData).map(([quizName, stats]) => ({
    quizName,
    attempts: stats.attempts,
    highestScore: stats.highestScore,
    lastAttemptDate: stats.lastAttemptDate,
  }));

  return (
    <>
      <Box
        p={6}
        borderRadius="md"
        maxWidth="600px"
        mx="auto"
        mb={8}
      >
        <Heading size="md" textAlign="center" mb={4}>
          Vos derniers résultats
        </Heading>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={quizData}>
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
      </Box>

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
    </>
  );
}
