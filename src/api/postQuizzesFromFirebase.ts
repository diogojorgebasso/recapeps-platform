import { db } from "@/utils/firebase";
import { doc, collection, setDoc } from "firebase/firestore";

/**
 * Função para adicionar uma questão a um sujeito específico no Firebase.
 * @param subjectId - O ID do sujeito
 * @param questionData - Os dados da questão, contendo `question`, `options` e `answer`
 */
export const addQuizToSubject = async (
  subjectId: string,
  questionData: { question: string; options: string[]; answer: string }
) => {
  try {
    const subjectRef = doc(db, "subjects", subjectId);
    const quizRef = doc(collection(subjectRef, "quizzes"));

    await setDoc(quizRef, questionData);

    console.log("Questão adicionada com sucesso!");
    return { success: true };
  } catch (error: unknown) {
    console.error("Erro ao adicionar a questão:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};
