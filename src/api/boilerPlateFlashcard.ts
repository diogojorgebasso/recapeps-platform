import { db } from "@/utils/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
const socle_et_competences = {
  questions: [
    {
      question: "Domaine 1",
      answer: "Langages pour penser et communiquer",
    },
    {
      question: "Domaine 2",
      answer: "Méthodes et outils pour apprendre",
    },
    {
      question: "Domaine 3",
      answer: "Partager des règles, assumer des rôles et des responsabilités",
    },
    {
      question: "Domaine 4",
      answer: "Systèmes naturels et systèmes techniques",
    },
    {
      question: "Domaine 5",
      answer: "Représentations du monde et de l’activité humaine",
    },
    {
      question: "CG1",
      answer: "Développer sa motricité et s’exprimer en utilisant son corps",
    },
    {
      question: "CG2",
      answer:
        "S’approprier par la pratique physique des méthodes et des outils",
    },
    {
      question: "CG3",
      answer: "Partager des règles, assumer des rôles et des responsabilités",
    },
    {
      question: "CG4",
      answer:
        "Apprendre à entretenir sa santé par une activité physique régulière",
    },
    {
      question: "CG5",
      answer: "S’approprier une culture physique sportive et artistique",
    },
  ],
};

export const addFlashcardsToFirestore = async () => {
  try {
    const subject = "socle-commun";
    const levelRef = doc(db, "subjects", subject, "flashcards", "flashcardv1");

    // Add the questions to the respective level document
    await setDoc(levelRef, {
      questions: socle_et_competences.questions,
      date: serverTimestamp(),
    });

    console.log("All levels and their questions were added successfully!");
  } catch (error) {
    console.error("Error adding levels and questions:", error);
  }
};
