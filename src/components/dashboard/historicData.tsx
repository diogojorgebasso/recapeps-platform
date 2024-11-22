import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

const QuizScoresChart = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Últimos Quizzes - Notas</h2>
      <ResponsiveContainer>
        <LineChart data={quizData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quiz" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QuizScoresChart;
