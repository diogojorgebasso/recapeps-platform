import { useEffect, useState } from "react";
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
  console.log(quizData)
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
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Vos derniers résultats
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={quizData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis
              dataKey="quizName"
              stroke="#888"
              label={{
                position: "insideBottom",
                offset: -5,
                fill: "#888",
              }}
            />
            <YAxis
              stroke="#888"
              label={{
                value: "Score",
                angle: -90,
                position: "insideLeft",
                fill: "#888",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                borderRadius: "5px",
                border: "none",
              }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#aaa" }}
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
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Vos résultats des quizzes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-700 px-4 py-2">Matière</th>
                <th className="border border-gray-700 px-4 py-2">Tentatives</th>
                <th className="border border-gray-700 px-4 py-2">Meilleure Note</th>
                <th className="border border-gray-700 px-4 py-2">Date Dernière Tentative</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                >
                  <td className="border border-gray-700 px-4 py-2">{row.quizName}</td>
                  <td className="border border-gray-700 px-4 py-2 text-center">{row.attempts}</td>
                  <td className="border border-gray-700 px-4 py-2 text-center">{row.highestScore}</td>
                  <td className="border border-gray-700 px-4 py-2 text-center">
                    {new Date(row.lastAttemptDate).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
