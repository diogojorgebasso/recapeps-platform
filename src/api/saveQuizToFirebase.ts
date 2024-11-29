// Função para salvar o quiz que o usuário acabou de realizar
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

export const saveUserQuiz = async (userId: string, quizResult: {
  subjectId: string;
  score: number;
  totalQuestions: number;
  date: string;
  questions: { questionId: string; selectedAnswer: string | null }[];
}) => {
  try {
    const userQuizRef = doc(collection(db, "users", userId, "quizzes"));
    await setDoc(userQuizRef, quizResult);
    console.log("Quiz salvo com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar o quiz:", error);
  }
};