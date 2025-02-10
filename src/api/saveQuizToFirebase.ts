import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
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

    if (quizResult.score >= 6) {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data() || {};
      const subjectLevels = userData.levels || {};
      const currentLevel = subjectLevels[quizResult.subjectId] || 1;
      if (currentLevel < 3) {
        subjectLevels[quizResult.subjectId] = currentLevel + 1;
        await setDoc(userRef, { subjectLevels }, { merge: true });
      }
    }
  } catch (error) {
    console.error("Erro ao salvar o quiz:", error);
  }
};
