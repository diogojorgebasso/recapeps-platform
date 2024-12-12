import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";

type Question = {
  question: string;
  options: string[];
  answer: string;
  level : number;
};

type Quiz = {
  questions: Question[];
};

const quizzes: Quiz[] = [
  {
    questions: [
      {
        question: "Les « classes santé » ont été mises en place par :",
        options: [
          "Le docteur Bellin du Cotteau",
          "Le professeur Latarjet",
          "Le docteur Fourestier",
          "Le ministre de l’éducation nationale Zay"
        ],
        answer: "Le docteur Fourestier",
        level: 1,
      },
      {
        question: "Les classes santé de Lyon ont été expérimentées entre :",
        options: ["1926 et 1942", "1937 et 1941", "1928 et 1939", "1933 et 1941"],
        answer: "1928 et 1939",
        level: 1,
      },
      {
        question: "Quel était l'objectif des stages Maurice Baquet ?",
        options: [
          "Organiser des compétitions sportives.",
          "Créer une pédagogie sportive adaptée aux enfants de 5 à 10 ans.",
          "Former des enseignants d'EPS.",
          "Réduire le temps de vacances scolaires."
        ],
        answer: "Créer une pédagogie sportive adaptée aux enfants de 5 à 10 ans.",
        level: 1,
      },
      {
        question: "La République des sports de Calais a pour objectif :",
        options: [
          "La participation active des élèves à une République ayant le sport comme support",
          "Transmettre un maximum de techniques sportives",
          "L’apprentissage de l’obéissance par le sport",
          "De former des champions sportifs"
        ],
        answer: "La participation active des élèves à une République ayant le sport comme support",
        level: 1,
      },
      {
        question: "Quel acteur instaure la République des sports de Calais ?",
        options: [
          "Maurice Baquet",
          "Robert Mérand",
          "Jacques De Rette",
          "Max Fourestier"
        ],
        answer: "Jacques De Rette",
        level: 1,
      },
      {
        question: "Quelle expérimentation vise un apprentissage de la citoyenneté ?",
        options: [
          "La République des Sports de Calais",
          "Les classes santé de Lyon",
          "Le lycée Corbeil-Essonnes",
          "Les stages Maurice Baquet"
        ],
        answer: "La République des Sports de Calais",
        level: 1,
      },
      {
        question: "Dans quelle région l'expérimentation Corbeil Essonne a-t-elle été menée ?",
        options: ["Provence-Alpes-Côte d'Azur", "Île-de-France", "Bretagne", "Normandie"],
        answer: "Île-de-France",
        level: 1,
      },
      {
        question: 'Les "stages Baquet" est une innovation visant à :',
        options: [
          "Rénovation de l'acte pédagogique en EPS",
          "L'introduction du sport en compétition",
          "La création de classes transplantées",
          "L'évaluation des compétences physiques"
        ],
        answer: "Rénovation de l'acte pédagogique en EPS",
        level: 1,

      },
      {
        question: "La réorganisation de la journée scolaire sous le Front Populaire visait à :",
        options: [
          "Diminuer le temps d’étude au profit de l’EPS",
          "Augmenter les heures des disciplines intellectuelles",
          "Introduire des activités compétitives",
          "Supprimer l'éducation physique"
        ],
        answer: "Diminuer le temps d’étude au profit de l’EPS",
        level: 1,
      },
      {
        question: "Qu'est-ce que l'expérimentation pédagogique ?",
        options: [
          "Répondre à un besoin identifié des élèves ou des équipes pédagogiques.",
          "Travailler différemment.",
          "Déroger aux dispositions du code de l'éducation dans un cadre réglementé",
          "Obligatoirement une innovation"
        ],
        answer: "Répondre à un besoin identifié des élèves ou des équipes pédagogiques.",
        level: 1,
      },
      {
        question: "L'objectif principal de la loi d'orientation du 10 juillet 1989 est de :",
        options: [
          "Réduire l'échec scolaire",
          "Centrer l'éducation sur les élèves",
          "Introduire le sport compétitif",
          "Renforcer l'évaluation formative"
        ],
        answer: "Réduire l'échec scolaire",
        level: 1,
      },
      {
        question: 'Les "classes santé" de Lyon (1928-1939) avaient pour objectif de :',
        options: [
          "Promouvoir le sport de compétition",
          "Remédier à un état physiologique défectueux des élèves",
          "Introduire l'éducation physique dans le cadre scolaire",
          "Développer les compétences psychomotrices"
        ],
        answer: "Remédier à un état physiologique défectueux des élèves",
        level: 1,

      },
      {
        question: "Quel type de pédagogie était promu par les stages Maurice Baquet ?",
        options: [
          "Pédagogie adaptée aux jeunes enfants.",
          "Pédagogie universitaire.",
          "Pédagogie traditionnelle.",
          "Pédagogie compétitive."
        ],
        answer: "Pédagogie adaptée aux jeunes enfants.",
        level: 1,

      },
      {
        question: 'La réintroduction du "modèle hygiénique" en EPS se réfère principalement à :',
        options: [
          "Les expérimentations médicales",
          "Les expérimentations psychologiques",
          "L'introduction du sport en compétition",
          "L'évaluation formative"
        ],
        answer: "Les expérimentations médicales",
        level: 1,

      },
      {
        question: 'Le concept de "mi-temps pédagogique" à Vanves vise à :',
        options: [
          "Réorganiser la semaine scolaire",
          "Introduire le sport en compétition",
          "Réformer les méthodes d'évaluation",
          "Promouvoir l'éducation physique"
        ],
        answer: "Réorganiser la semaine scolaire",
        level: 1,
      },
      {
        question: "Quel type d'évaluation était central dans l'expérimentation Corbeil Essonne ?",
        options: [
          "Évaluation académique.",
          "Évaluation sportive basée sur la compétition.",
          "Évaluation comportementale.",
          "Évaluation psychologique."
        ],
        answer: "Évaluation comportementale.",
        level: 1,
      }
    ]
  }
];


/**
 * Add multiple quizzes to the Firestore database
 * @param quizzes - Array of quiz data to add
 */
export const addMultipleQuizzesToFirestore = async () => {
  try {
    const quizzesRef = collection(db, "subjects", "expérimentations-pédagogiques"); // Reference to the 'quizzes' collection

    // Add each quiz to Firestore
    for (const quiz of quizzes) {
      await addDoc(quizzesRef, quiz);
    }
  } catch (error) {
    console.error("Error adding quizzes:", error);
  }
};

