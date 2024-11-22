import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const quizData = [
  { quiz: "Quiz 1", score: 75 },
  { quiz: "Quiz 2", score: 85 },
  { quiz: "Quiz 3", score: 65 },
  { quiz: "Quiz 4", score: 90 },
  { quiz: "Quiz 5", score: 80 },
  { quiz: "Quiz 6", score: 70 },
  { quiz: "Quiz 7", score: 95 },
  { quiz: "Quiz 8", score: 88 },
  { quiz: "Quiz 9", score: 78 },
  { quiz: "Quiz 10", score: 92 },
];

export default function StyledQuizScoresChart () {
  return (
    <div style={{ backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}>Últimos Quizzes - Notas</h2>
      <p style={{ color: "#aaa", textAlign: "center", marginBottom: "20px" }}>
        Visualize as notas obtidas nos quizzes recentes.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={quizData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="quiz" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", borderRadius: "5px", border: "none" }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#aaa" }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ stroke: "#fff", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
