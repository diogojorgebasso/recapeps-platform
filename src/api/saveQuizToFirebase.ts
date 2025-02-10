// Função para salvar o quiz que o usuário acabou de realizar
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";

export const saveUserQuiz = async (
  uid: string,
  quizResult: {
    subjectId: string;
    score: number;
    totalQuestions: number;
    date: string;
    questions: { questionId: string; selectedAnswer: number[] }[];
  }
) => {
  try {
    const userQuizRef = collection(db, "users", uid, "quizzes");
    await addDoc(userQuizRef, quizResult);
  } catch (error) {
    console.error("Erro ao salvar o quiz:", error);
  }
};
