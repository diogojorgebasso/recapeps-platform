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
import { Quiz } from "@/types/Quizz";
import { useAuth } from "@/hooks/useAuth";

export default function UserQuizScoresChart() {
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const { uid } = useAuth()

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUserQuizzes(uid);
      setQuizData(data);
    };

    loadData();
  }, [uid]);

  return (
    <div style={{ backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}>Últimos Quizzes do Usuário</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={quizData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="quizName" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", borderRadius: "5px", border: "none" }}
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
};
