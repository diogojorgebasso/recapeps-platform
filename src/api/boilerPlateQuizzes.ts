import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/firebase";

type Question = {
  question: string;
  options: string[];
  answers: number[];
  level: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date?: any;    
};

const questions: Question[] = [
  {
    "question": "« La mixité sexuée à l’école c’est : »",
    "options": [
      "« Éduquer les filles et les garçons ensemble »",
      "« Ne pas reconnaitre de différence entre les filles et les garçons dans l’enseignement »",
      "« Dispenser un enseignement séparé pour les filles et les garçons »",
      "« Dispenser un enseignement commun en reconnaissant les différences de chacun »",
    ],
    "answers": [0, 3],
    "level": 1,
  },
  {
    "question": "« Le genre c’est : »",
    "options": [
      "« La mixité »",
      "« Le sexe »",
      "« Une construction sociale »",
      "« Une expression de la féminité ou la masculinité »",
    ],
    "answers": [2, 3],
    "level": 1,
  },
  {
    "question":
      "« Selon Boigey, « la femme n’est point construite pour lutter mais pour …… » (Boigey, Manuel scientifique d’EP, 1922) »",
    "options": ["« Enfanter »", "« Cuisiner »", "« Procréer »", "« Nettoyer »"],
    "answers": [2],
    "level": 1,
  },
  {
    "question": "Quels acteurs de l’EP considèrent la femme comme inférieure à l’homme ?",
    "options": ["Boigey", "Jeudon", "Morisson", "Bellin du Cotteau"],
    "answers": [0, 1, 2, 3],
    "level": 1
  },
  {
    "question": "Dans les IO de 1945 :",
    "options": [
      "Les objectifs sont les mêmes pour les filles et les garçons",
      "Les activités support sont les mêmes pour les filles et les garçons",
      "Les objectifs sont différents pour les filles et les garçons",
      "Les activités support différentes pour les filles et les garçons"
    ],
    "answers": [2, 3],
    "level": 1
  },
  {
    "question": "En 1945 au bac, tandis que les garçons font du lancer de poids, les filles font :",
    "options": [
      "Du lancer de ballon",
      "Du lancer de javelot",
      "Du lancer de disque",
      "Du lancer de pommes"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Quels acteurs sont en faveur d’une égalité filles-garçons en termes de contenus ?",
    "options": ["Parlebas", "Pujade Renaud", "Bellin du Cotteau", "Jeudon"],
    "answers": [0, 1],
    "level": 1
  },
  {
    "question": "La différenciation entre sexe et genre repose sur le fait que :",
    "options": [
      "Le sexe est biologique, le genre est social",
      "Le sexe est social, le genre est biologique",
      "Le sexe est culturel, le genre est scientifique",
      "Le sexe est scientifique, le genre est culturel"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Quelle(s) réforme(s) encourage(nt) la mixité à l’école ?",
    "options": ["Capelle-Fouchet", "Berthoin", "Haby", "Jopsin"],
    "answers": [2],
    "level": 1
  },
  {
    "question": "Quelles IO entérinent les différences entre les sexes :",
    "options": ["1959", "1962", "1967", "1985"],
    "answers": [2],
    "level": 1
  },
  {
    "question": "Selon Pujade-Renaud, une piste pour tendre vers une égalité filles garçons en EPS serait :",
    "options": [
      "Développer la dimension expressive",
      "Donner des avantages aux filles lors des compétitions sportives",
      "Différencier le barème de notation",
      "Développer la dimension compétitive"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "L’EP dans les années 30 a pour objectif de former des filles :",
    "options": [
      "Fortes et courageuses",
      "Gracieuses et féminines",
      "Futures mères et épouses",
      "Sportives et ambitieuses"
    ],
    "answers": [1, 2],
    "level": 1
  },
  {
    "question": "Dans les années 30, les principales parties du corps à développer chez les filles en EP sont :",
    "options": ["Les bras", "Les hanches", "Les abdominaux", "Le dos"],
    "answers": [1, 3],
    "level": 1
  },
  {
    "question": "La Loi Jospin de 1989 a introduit dans l'éducation :",
    "options": [
      "La séparation des sexes",
      "La coéducation dans le primaire",
      "Le respect des différences de chacun",
      "La ségrégation par niveau scolaire"
    ],
    "answers": [2],
    "level": 1
  },
  {
    "question": "Dans les IO de 1985, on parle de :",
    "options": [
      "Filles et garçons",
      "D’élèves",
      "De fillettes et de garçons",
      "D’hommes et de femmes"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "La loi Haby impose la mixité dans :",
    "options": [
      "Les lycées seulement",
      "Les établissements privés uniquement",
      "Les universités",
      "Les écoles, collèges et lycées"
    ],
    "answers": [3],
    "level": 1
  },
  {
    "question": "La mixité favorise :",
    "options": [
      "L’apprentissage du vivre-ensemble",
      "Les stéréotypes genrés",
      "La violence",
      "L’instruction à distance"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Jusqu’en 1925, les écoles françaises étaient :",
    "options": [
      "Mixtes",
      "Séparées pour les filles et les garçons",
      "Ouvertes aux garçons uniquement",
      "Ouvertes aux filles uniquement"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "La séparation des sexes dans les établissements scolaires au 19ème siècle répondait à des principes :",
    "options": ["Moraux et religieux", "Scientifiques", "De santé", "D’effectifs"],
    "answers": [0],
    "level": 1
  },
  {
    "question": "La danse en EPS dans les années 60 est :",
    "options": [
      "Recommandée pour les garçons",
      "Principalement recommandée pour les filles",
      "Obligatoire pour tous les élèves",
      "Interdite dans les écoles publiques"
    ],
    "answers": [1],
    "level": 1
  }
];


/**
 * Add multiple quizzes to the Firestore database
 * @param quizzes - Array of quiz data to add
 */
export const addQuestionsToFirestore = async () => {
  try {
    const questionsRef = collection(
      db,
      "ecrit-1",
      "la-mixite-sexuee",
      "quizzes"
    );

    for (const question of questions) {
      await addDoc(questionsRef, {
        ...question,
        date: serverTimestamp(), // Adiciona a data como timestamp do servidor
      });
    }
    console.log("Todas as perguntas foram adicionadas com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar perguntas:", error);
  }
};


