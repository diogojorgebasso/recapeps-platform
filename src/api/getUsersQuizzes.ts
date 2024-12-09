import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

/**
 * Fetch the last 10 quizzes completed by a user
 * @param userId - The user's ID
 * @returns Array with quiz data
 */
export const fetchUserQuizzes = async (userId: string) => {
  try {
    const quizzesRef = collection(db, "users", userId, "quizzes");
    const quizzesQuery = query(quizzesRef, orderBy("date", "desc"), limit(10)); // Sort by date

    const querySnapshot = await getDocs(quizzesQuery);

    const quizzes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      score: doc.data().score, // Fetch the score
      quizName: doc.data().subjectId, // Use subjectId as the quiz name
      timestamp: doc.data().date, // Use date as the timestamp
    }));

    return quizzes.reverse();
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return [];
  }
};
