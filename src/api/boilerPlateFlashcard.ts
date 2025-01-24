import { db } from "@/utils/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const sport_scolaire = {
  questions: [
    {
      question: "En quelle année a été créée l'OSU ?",
      answer: "1934",
    },
    {
      question: "Quelle est la date de création de l'OSSU ?",
      answer: "23 juin 1938",
    },
    {
      question: "Quand a été créée l'USEP ?",
      answer: "1er février 1939",
    },
    {
      question: "Que devient l'OSSU en 1942 ?",
      answer: "L'OSSU devient l'USSU",
    },
    {
      question: "Quand l'USSU redevient-il l'OSSU ?",
      answer: "1945",
    },
    {
      question: "Quelle est la date de reconnaissance officielle de l'USEP ?",
      answer: "22 juin 1950",
    },
    {
      question: "Quand ont été instaurées les 3h forfaitaires d'AS ?",
      answer: "25 mai 1950",
    },
    {
      question: "Quand l'OSSU a-t-il été officiellement dissout ?",
      answer: "24 juillet 1961",
    },
    {
      question: "Qui a été retiré de ses fonctions en 1960 par Herzog ?",
      answer: "Flouret",
    },
    {
      question: "Quelle proposition a été faite par Comiti le 7 mars 1963 ?",
      answer: "Supprimer les 3h d'AS au profit d'heures d'enseignement",
    },
    {
      question: "Quand l'ASSU a-t-il remplacé l'OSSU ?",
      answer: "7 septembre 1963",
    },
    {
      question: "Quelles innovations ont été introduites en 1965 ?",
      answer: "Création des « formules masse » et districts",
    },
    {
      question: "Quelle est la date du Plan Soisson ?",
      answer: "31 août 1978",
    },
    {
      question: "Que s'est-il passé en 1972 dans le sport scolaire ?",
      answer: "Création des Centres d'Animation Sportive",
    },
    {
      question: "Quelle loi a été introduite en 1975 ?",
      answer: "Loi Mazeaud",
    },
    {
      question: "Quand les 3h d'AS sont-elles revenues ?",
      answer: "1981",
    },
    {
      question:
        "Quand l'AS est-il devenu pédagogique avec des enjeux éducatifs ?",
      answer: "16 juillet 1984",
    },
    {
      question:
        "Quel projet a été introduit dans les établissements scolaires en 1986 ?",
      answer: "Projet d'AS obligatoire",
    },
    {
      question: "Quand ont été créées les compétitions UNSS en APEX ?",
      answer: "1987",
    },
    {
      question: "Quand ont été créées les compétitions UNSS en APPN ?",
      answer: "1988",
    },
    {
      question: "Quel projet national a été introduit le 20 mars 2003 ?",
      answer: "Projet national de l'UNSS",
    },
    {
      question:
        "Quel rapport a été publié en 2001 concernant le sport scolaire ?",
      answer: "Rapport Leblanc",
    },
    {
      question: "Quelle circulaire a été publiée le 25 avril 2002 ?",
      answer: "Circulaire Lang",
    },
    {
      question:
        "Quel décret a été publié en 2007 concernant le sport scolaire ?",
      answer: "Décret Robien",
    },
    {
      question: "Quand a été instaurée la journée du sport scolaire ?",
      answer: "18 août 2010",
    },
    {
      question: "Quel plan de développement a été introduit pour 2016-2020 ?",
      answer: "Plan national de développement du sport scolaire",
    },
  ],
};

const numerique = {
  questions: [
    {
      question: "Quelle est la finalité des IO en 1938 ?",
      answer:
        "Inspirer aux enfants le goût de la culture corporelle et de la vie en plein-air",
    },
    {
      question: "Quelle est la finalité des IO en 1941 ?",
      answer: "Développement physique, intellectuel et moral",
    },
    {
      question: "Quelle est la finalité des IO en 1945 ?",
      answer: "Développement normal de l’enfant",
    },
    {
      question: "Quelle est la finalité des IO en 1959 ?",
      answer: "Développement normal",
    },
    {
      question: "Quels sont les objectifs des IO en 1962 ?",
      answer: [
        "Donner aux élèves le maximum de connaissances techniques et d’entraînement physique compatible avec leurs possibilités personnelles",
        "Préparer pour les associations civiles de futurs dirigeants dont le besoin se fait durablement sentir",
      ],
    },
    {
      question: "Quelles sont les finalités des IO en 1967 ?",
      answer: [
        "Agir sur la nature d’un enfant pour le rendre capable d’accomplir librement certains actes et de viser certains buts considérés comme souhaitables dans une civilisation donnée",
        "Acquisition de la santé",
        "Contribuer à la formation de sa personnalité en l’aidant à s’épanouir physiquement, intellectuellement et moralement",
      ],
    },
    {
      question: "Quelle est la finalité des IO en 1985 ?",
      answer: "Développer les capacités motrices de l’élève",
    },
    {
      question: "Quels sont les objectifs des IO en 1986 ?",
      answer: [
        "Enrichir son patrimoine biologique",
        "Accéder à la connaissance et à la maîtrise de faits de culture",
        "Développer les capacités motrices",
      ],
    },
    {
      question: "Quels sont les objectifs des IO en 1996 ?",
      answer: [
        "S’éprouver physiquement et mieux se connaître",
        "Développement des capacités nécessaires aux conduites motrices",
        "Acquisitions, par la pratique, de compétences et connaissances relatives aux APSA",
        "Accès aux connaissances relatives à l’organisation et à l’entretien de la vie physique",
      ],
    },
    {
      question: "Quelles sont les finalités des IO en 1999 selon le BO n°7 ?",
      answer:
        "Permettre aux lycées d’affirmer leur personnalité par le sens de l’effort physique, le développement de leurs talents, la conduite de façon responsable et autonome de leur santé et leur sécurité",
    },
    {
      question: "Quelle est la finalité des IO en 2000 (BO n°7) ?",
      answer: "Lycéen culturellement et physiquement éduqué",
    },
    {
      question: "Quelle est la finalité des IO en 2001 ?",
      answer:
        "S’engager dans l’activité, prendre des risques, contrôler leur engagement, planifier un projet d’apprentissage et/ou d’entraînement, apprécier les effets de la pratique, échanger collectivement et développer des attitudes citoyennes",
    },
    {
      question: "Quelle est la finalité des IO en 2008 ?",
      answer:
        "Former un citoyen cultivé, lucide, autonome, physiquement et socialement éduqué",
    },
    {
      question: "Quelle est la finalité des IO en 2010 ?",
      answer:
        "Former, par la pratique scolaire des activités physiques, sportives et artistiques, un citoyen cultivé, lucide, autonome, physiquement et socialement éduqué",
    },
    {
      question: "Quelle est la finalité des IO en 2015 ?",
      answer:
        "Former un citoyen lucide, autonome, physiquement et socialement éduqué, dans le souci du vivre ensemble",
    },
    {
      question:
        "Quelle est la finalité des IO en 2019 pour les lycées généraux et technologiques (LGT) ?",
      answer:
        "Former, par la pratique physique, sportive, artistique, un citoyen épanoui, cultivé, capable de faire des choix éclairés pour s’engager de façon régulière et autonome dans un mode de vie actif et solidaire",
    },
    {
      question:
        "Quelle est la finalité des IO en 2019 pour les lycées professionnels (LP) ?",
      answer:
        "Former, par la pratique physique, sportive, artistique, un citoyen épanoui, cultivé, capable de faire des choix éclairés et responsables pour s’engager de façon régulière, autonome et pérenne dans un mode de vie actif et solidaire",
    },
  ],
};

const politique = {
  questions: [
    {
      question: "Quel événement politique important s'est produit en 1936 ?",
      answer: "Avènement du front populaire",
    },
    {
      question: "Quelle période correspond au front populaire ?",
      answer: "1936 - 1940",
    },
    {
      question:
        "Comment s'appelle le régime en place en France de 1940 à 1944 ?",
      answer: "« L’état français », Vichy",
    },
    {
      question: "Quel gouvernement était en place entre 1944 et 1946 ?",
      answer: "Gouvernement provisoire de De Gaulle",
    },
    {
      question: "Quelle République gouvernait la France de 1945 à 1958 ?",
      answer: "IVème République",
    },
    {
      question: "Quelle période correspond à la gouvernance de De Gaulle ?",
      answer: "1958 - 1969",
    },
    {
      question: "Quel président français a gouverné entre 1969 et 1974 ?",
      answer: "Georges Pompidou",
    },
    {
      question: "Quel président français a gouverné entre 1974 et 1981 ?",
      answer: "Valery Giscard d’Estaing",
    },
    {
      question:
        "Qui était président de la République française entre 1981 et 1995 ?",
      answer: "François Mitterrand (1er et 2ème mandats)",
    },
    {
      question: "Quel président français a gouverné entre 1995 et 2007 ?",
      answer: "Jacques Chirac",
    },
    {
      question:
        "Qui était président de la République française entre 2007 et 2012 ?",
      answer: "Nicolas Sarkozy",
    },
    {
      question: "Quel président français a gouverné entre 2012 et 2017 ?",
      answer: "François Hollande",
    },
    {
      question: "Qui est président de la République française depuis 2017 ?",
      answer: "Emmanuel Macron",
    },
  ],
};

const mutations_educatif = {
  questions: [
    {
      question:
        "En quelle année la mixité a-t-elle été autorisée dans le primaire ?",
      answer: "1933",
    },
    {
      question: "Que s'est-il passé en 1945 dans le système éducatif ?",
      answer: "Rétablissement de la gratuité scolaire",
    },
    {
      question: "Quel est le nom du plan éducatif établi en 1947 ?",
      answer: "Plan Langevin-Wallon",
    },
    {
      question: "Quelle réforme a été mise en place le 6 juin 1959 ?",
      answer: "Réforme Berthoin",
    },
    {
      question: "Quelle réforme a été promulguée le 3 août 1963 ?",
      answer: "Réforme Capelle-Fouchet",
    },
    {
      question: "Quelle loi a été promulguée le 11 juillet 1975 ?",
      answer: "Loi Haby",
    },
    {
      question: "Quelle réforme a été mise en place le 2 juin 1982 ?",
      answer: "Réforme Savary",
    },
    {
      question: "Quel rapport éducatif a été publié en décembre 1982 ?",
      answer: "Rapport Legrand",
    },
    {
      question: "Quelles commissions ont été créées en 1983 ?",
      answer: "Commissions horizontales et verticales",
    },
    {
      question: "Quelle loi éducative a été promulguée le 16 juillet 1984 ?",
      answer: "Loi Avice",
    },
    {
      question:
        "Quelle commission a été créée en 1988 pour le système éducatif ?",
      answer: "Commission Bourdieu-Gros",
    },
    {
      question: "Quelle loi éducative a été mise en place le 10 juillet 1989 ?",
      answer: "Loi Jospin",
    },
    {
      question: "Quel document a été publié le 20 février 1992 ?",
      answer: "Charte des programmes",
    },
    {
      question: "Quel contrat éducatif a été lancé le 1er septembre 1994 ?",
      answer: "Nouveau contrat pour l’école, Bayrou",
    },
    {
      question: "Quelle réforme éducative a été mise en place le 27 mai 1999 ?",
      answer: "Réforme des lycée",
    },
    {
      question: "Quel projet éducatif a été annoncé le 10 juillet 1999 ?",
      answer: "Collège de l’an 2000",
    },
    {
      question: "Quel rapport a été publié le 1er octobre 2004 ?",
      answer: "Rapport Thélot",
    },
    {
      question: "Quelle loi éducative a été promulguée le 23 avril 2005 ?",
      answer: "Loi Fillon",
    },
    {
      question:
        "Que signifient les réseaux d'éducation prioritaire créés en 2006 ?",
      answer: "Éducation pour les zones prioritaires",
    },
    {
      question: "Quelle réforme a été mise en place en 2010 sous Sarkozy ?",
      answer: "Réforme du lycée",
    },
    {
      question: "Quelle loi a été promulguée le 8 juillet 2013 ?",
      answer:
        "Loi d’orientation et de programmation pour la refondation de l’école de la république",
    },
    {
      question: "Quelle réforme éducative a été introduite le 20 mai 2015 ?",
      answer: "Réforme du collège",
    },
    {
      question:
        "Quelle réforme a été mise en place en 2019 pour le lycée et le baccalauréat ?",
      answer: "Réforme du lycée et du baccalauréat",
    },
    {
      question: "Quelle loi a été promulguée le 28 juillet 2019 ?",
      answer: "Loi pour une école de la confiance (Loi Blanquer)",
    },
  ],
};

console.log(sport_scolaire);
console.log(numerique);
console.log(politique);

export const addFlashcardsToFirestore = async () => {
  try {
    const levelRef = doc(
      db,
      "subjects",
      "mutations-educatif",
      "flashcards",
      "flashcardv1"
    );

    // Add the questions to the respective level document
    await setDoc(levelRef, {
      questions: mutations_educatif.questions,
      date: serverTimestamp(),
    });

    console.log("All levels and their questions were added successfully!");
  } catch (error) {
    console.error("Error adding levels and questions:", error);
  }
};
