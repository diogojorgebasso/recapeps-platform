import { db } from "@/utils/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { Quiz, Subject } from "@/types/Quizz";

// Função para buscar todas as matérias
export const fetchSubjects = async (prova:string): Promise<Subject[]> => {
  const querySnapshot = await getDocs(collection(db, prova));
  return querySnapshot.docs.map(doc => ({
    ...(doc.data() as Subject),
    id: doc.id,
  }));
};

// Função para buscar quizzes de uma matéria específica
export const fetchQuizzesBySubject = async (prova : string, subjectId: string): Promise<Quiz[]> => {
  const quizzesRef = collection(db, `${prova}/${subjectId}/quizzes`);
  const querySnapshot = await getDocs(quizzesRef);
  const allQuizzes = querySnapshot.docs.map(doc => ({
    ...(doc.data() as Quiz),
    id: doc.id,
  }));
  const shuffledQuizzes = allQuizzes.sort(() => Math.random() - 0.5); // Embaralhamento
  return shuffledQuizzes.slice(0, 10); // Seleciona os 10 primeiros
};
