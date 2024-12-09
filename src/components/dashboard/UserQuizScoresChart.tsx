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

  useEffect(() => {
    const loadData = async () => {
      if (uid) {
        const data = await fetchUserQuizzes(uid);
        setQuizData(data);
      }
    };

    loadData();
  }, [uid]);

  return (
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
        Votre Quiz récents
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={quizData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="quizName"
            stroke="#888"
            label={{
              value: "Quizzes",
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
  );
}
