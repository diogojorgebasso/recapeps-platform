import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";

type Question = {
  question: string;
  answer: string;
};

type Quiz = {
  questions: Question[];
};

const quizzes: Quiz[] = [
  {
    questions: [
      { question: "Mixité autorisée dans le primaire", answer: "1933" },
      { question: "Rétablissement de la gratuité scolaire", answer: "1945" },
      { question: "Plan Langevin-Wallon", answer: "1947" },
      { question: "Réforme Berthoin", answer: "6 juin 1959" },
      { question: "Réforme Capelle-Fouchet", answer: "3 août 1963" },
      { question: "Loi Haby", answer: "11 juillet 1975" },
      { question: "Réforme Savary", answer: "2 juin 1982" },
      { question: "Rapport Legrand", answer: "Décembre 1982" },
      { question: "Commissions horizontales et verticales", answer: "1983" },
      { question: "Loi Avice", answer: "16 juillet 1984" },
      { question: "Commission Bourdieu-Gros", answer: "1988" },
      { question: "Loi Jospin", answer: "10 juillet 1989" },
      { question: "Charte des programmes", answer: "20 février 1992" },
      { question: "Nouveau contrat pour l’école, Bayrou", answer: "1er septembre 1994" },
      { question: "Réforme des lycées", answer: "27 mai 1999" },
      { question: "Collège de l’an 2000", answer: "10 juillet 1999" },
      { question: "Rapport Thélot", answer: "1er octobre 2004" },
      { question: "Loi Fillon", answer: "23 avril 2005" },
      { question: "Création des réseaux d’éducation prioritaire", answer: "2006" },
      { question: "Réforme du lycée (Sarkozy)", answer: "2010" },
      {
        question:
          "Loi d’orientation et de programmation pour la refondation de l’école de la république",
        answer: "8 juillet 2013",
      },
      { question: "Réforme du collège", answer: "20 mai 2015" },
      { question: "Réforme du lycée et du baccalauréat", answer: "2019" },
      {
        question: "Loi pour une école de la confiance (Loi Blanquer)",
        answer: "28 juillet 2019",
      },
    ],
  },
];


/**
 * Add multiple quizzes to the Firestore database
 * @param quizzes - Array of quiz data to add
 */
export const addMultipleQuizzesToFirestore = async () => {
  try {
    const quizzesRef = collection(db, "flashcards", "mutations-systeme-educatif", "questions"); // Reference to the 'quizzes' collection

    for (const quiz of quizzes) {
      for (const question of quiz.questions) {
        await addDoc(quizzesRef, question);
      }
    }
  } catch (error) {
    console.error("Error adding quizzes:", error);
  }
};

