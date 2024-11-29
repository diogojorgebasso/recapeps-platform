import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Quiz } from "@/types/Quizz";
/**
 * Busca os últimos quizzes realizados por um usuário
 * @param userId - O ID do usuário
 * @returns Array com os dados dos quizzes
 */
export const fetchUserQuizzes = async (userId: string) => {
  try {
    const quizzesRef = collection(db, "users", userId, "quizzes");
    const quizzesQuery = query(quizzesRef, orderBy("timestamp", "desc"), limit(10)); // Ordena por timestamp e pega os 10 mais recentes
    const querySnapshot = await getDocs(quizzesQuery);

    const quizzes: Quiz[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      quizzes.push({ 
        id: doc.id, 
        question: data.question, 
        options: data.options, 
        answer: data.answer 
      });
    });

    return quizzes;
  } catch (error) {
    console.error("Erro ao buscar quizzes:", error);
    return [];
  }
};
