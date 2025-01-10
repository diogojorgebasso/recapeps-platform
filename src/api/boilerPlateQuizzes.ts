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

const mixite_sexuee: Question[] = [
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
      "Selon Boigey, « la femme n’est point construite pour lutter mais pour …… » (Boigey, Manuel scientifique d’EP, 1922)",
    "options": ["« Enfanter »", "« Cuisiner »", "« Procréer »", "« Nettoyer »"],
    "answers": [2],
    "level": 1,
  },
  {
    "question": "Quels acteurs de l’EP considèrent la femme comme inférieure à l’homme ?",
    "options": ["Boigey", "Jeudon", "Morisson", "Bellin du Cotteau"],
    "answers": [0, 1, 3],
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
    "answers": [0,1,2,3],
    "level": 1
  },
  {
    "question": "Quelles IO entérinent les différences entre les sexes :",
    "options": ["1959", "1962", "1967", "1985"],
    "answers": [3],
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
    "answers": [1, 2],
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
  },
  {
    "question": "La coéducation diffère de la mixité car elle :",
    "options": [
      "Établit un enseignement différencié pour les filles et les garçons",
      "Établit un enseignement séparé pour les filles et les garçons",
      "Tient forcément compte de la différence entre les sexes",
      "Est destinée à éduquer les garçons"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Une Éducation donnée en commun mais qui tient compte de la différence entre les sexes est :",
    "options": [
      "De la co-instruction",
      "De la mixité",
      "De la co-éducation",
      "De la non-mixité"
    ],
    "answers": [1,2],
    "level": 2
  },
  {
    "question": "Bellin du Cotteau préconise que les filles en EP :",
    "options": [
      "Doivent pratiquer de manière similaire aux garçons",
      "Doivent avoir la même méthode que les garçons mais avec des contenus différents",
      "Doivent avoir une méthode différente car elles ont des besoins différents",
      "Doivent avoir méthodes et contenus similaires aux garçons garçons"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Une instruction identique pour tous sans tenir compte des différences est :",
    "options": [
      "De la co-éducation",
      "De la co-instruction",
      "De la co-mixité",
      "Du co-enseignement"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "En quelle année la France a-t-elle rendue la mixité obligatoire dans les établissements publics ?",
    "options": [
      "1880",
      "1963",
      "1975",
      "1985"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "La mixité est officiellement permise dans le primaire depuis :",
    "options": [
      "1918",
      "1933",
      "1936",
      "1959"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "Selon Bellin du Cotteau (Bellin du Cotteau, Méthode sportive, 1930), la femme est de mentalité :",
    "options": [
      "Arrogante, stupide et ridicule",
      "Ennuyeuse, indécise et avare",
      "Enfantine, peu réfléchie et naïve",
      "Aimante, calme et attentionnée"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Selon Liotard, il faut « rendre la femme belle [...] afin d’améliorer sa fonction de :",
    "options": [
      "Mère",
      "Séductrice",
      "Reproductrice",
      "Conjointe"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Les IO de 1985 établissent :",
    "options": [
      "La même programmation quel que soit le sexe de l’élève",
      "Une programmation toujours différenciée selon le sexe",
      "Sept groupement d’activités pour tous",
      "Sept groupements d’activités pour les garçons et six pour les filles"
    ],
    "answers": [0,2],
    "level": 2
  },
  {
    "question": "Le CAPEPS demeure non mixte jusqu’en :",
    "options": [
      "1954",
      "1968",
      "1975",
      "1989"
    ],
    "answers": [3],
    "level": 2
  },
  {
    "question": "Dans les IO de 1985, la mixité apparait comme :",
    "options": [
      "Une contrainte",
      "Une plus-value",
      "Un objectif",
      "Une option"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "Selon Liotard en 1995, la jeune femme doit être belle pour :",
    "options": [
      "Être désirable",
      "Être utile",
      "Être intéressante",
      "Être forte"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "Les IO de 1997 stipulent que la mixité doit :",
    "options": [
      "Être ignorée en EPS",
      "Concerner seulement certaines activités",
      "Être encouragée, sans négliger les différences",
      "Être appliquée de manière impartiale"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Selon Kaufmann en 1995, la valeur de la femme provient de :",
    "options": [
      "Sa force",
      "Son courage",
      "L’intelligence",
      "L’esthétique"
    ],
    "answers": [3],
    "level": 2
  },
  {
    "question": "Les IO de 1945 distinguent l’EP féminine et masculine au niveau :",
    "options": [
      "Des contenus et de l’intensité",
      "De la fréquence et du lieu de pratique",
      "Des formes de groupement et de l’intensité",
      "De la fréquence et des contenus"
    ],
    "answers": [0],
    "level": 2
  },
  {
    "question": "La gymnastique harmonique est :",
    "options": [
      "Créée par Irène Popard",
      "Créée par Claude Pujade-Renaud",
      "Créée par Jean Bernard Bonange",
      "Créée par Anick Davisse"
    ],
    "answers": [0],
    "level": 2
  },
  {
    "question": "Quel facteur a contribué à la démocratisation quantitative de la mixité dans les écoles dans les années 1960 ?",
    "options": [
      "Le Baby-boom",
      "La Loi Camille Sée",
      "Le développement du sport",
      "La Guerre d’Algérie"
    ],
    "answers": [0],
    "level": 2
  },
  {
    "question": "La méthode d’expression corporelle est :",
    "options": [
      "Créée par Irène Popard",
      "Créée par Claude Pujade-Renaud",
      "Créée par Dalcroze",
      "Créée par Anick Davisse"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "La mixité en EPS en France est devenue une réalité :",
    "options": [
      "Dès la fin du 19e siècle",
      "Pendant les années 30",
      "À partir des années 80",
      "Depuis la création de l’éducation nationale"
    ],
    "answers": [2],
    "level": 2
  },
  {
    "question": "Le décret de 3 août 1963 :",
    "options": [
      "Supprime la mixité dans les écoles primaires",
      "Instaure la mixité dans les collèges d’enseignement secondaire",
      "Permet aux filles d’accéder aux écoles militaires",
      "Interdit la ségrégation dans les écoles privées"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "Les cours d’expression corporelle proposés par Bonange et Pujade-Renaud sont :",
    "options": [
      "Réservés aux hommes",
      "Réservés aux femmes",
      "Réservés aux enfants",
      "Mixtes"
    ],
    "answers": [3],
    "level": 2
  },
  {
    "question": "Jusqu’en 1960, les sports collectifs pratiqués par les filles en EPS pouvaient inclure uniquement :",
    "options": [
      "Le rugby et le football",
      "Le volley-ball, le basket-ball et le handball",
      "La boxe et la lutte",
      "Le tennis et le squash"
    ],
    "answers": [1],
    "level": 2
  },
  {
    "question": "Simone de Beauvoir, dans Le deuxième sexe en 1949 écrit la célèbre phrase « on ne naît pas femme, …» :",
    "options": [
      "On en meurt",
      "On le devient",
      "On nait neutre",
      "On le rejette"
    ],
    "answers": [1],
    "level": 2
  },{
    "question": "En 1949, sur 1,8 millions de licenciés sportifs, les femmes représentent :",
    "options": [
      "4,3%",
      "14,3%",
      "24,3%",
      "34,3%"
    ],
    "answers": [0],
    "level": 3
  },
  {
    "question": "En 1956, aux JO de Melbourne, sur 140 athlètes français, …. Sont des femmes :",
    "options": [
      "2",
      "18",
      "32",
      "57"
    ],
    "answers": [1],
    "level": 3
  },
  {
    "question": "Selon Boigey, il faut proscrire pour les femmes tout exercice qui :",
    "options": [
      "Lui permette de se défendre",
      "Développe leur musculature",
      "Est dangereux pour l’organe utérin",
      "Ressemble à un sport d’homme"
    ],
    "answers": [2],
    "level": 3
  },
  {
    "question": "Le docteur Jeudon invite à travailler le corps de la femme selon deux objectifs :",
    "options": [
      "La procréation et la grâce",
      "La souplesse et la tonicité",
      "La beauté et la souplesse",
      "La douceur et la procréation"
    ],
    "answers": [0],
    "level": 3
  },
  {
    "question": "Les femmes acquièrent le droit de vote en :",
    "options": [
      "1938",
      "1944",
      "1968",
      "1975"
    ],
    "answers": [1],
    "level": 3
  },
  {
    "question": "Ces femmes ont lutté pour le droit des femmes :",
    "options": [
      "Simone de Beauvoir",
      "Simone Weil",
      "Simone Veil",
      "Louise Weiss"
    ],
    "answers": [0,2,3],
    "level": 3
  },
  {
    "question": "Le principe de gémination mixte signifie :",
    "options": [
      "Que l’institutrice s’occupe des filles et l’instituteur des garçons",
      "La mise en place de binômes mixtes dans les écoles",
      "Regrouper les filles et les garçons dans les mêmes écoles quand les effectifs sont trop faibles",
      "La séparation spatiale des filles et des garçons dans la classe"
    ],
    "answers": [2],
    "level": 3
  },
  {
    "question": "A partir de quelle année les femmes peuvent disposer d’un compte bancaire à leur nom, et ainsi d’un salaire propre ?",
    "options": [
      "1956",
      "1963",
      "1967",
      "1972"
    ],
    "answers": [2],
    "level": 3
  },
  {
    "question": "Claude Pujade Renaud :",
    "options": [
      "Prône une vision universaliste",
      "Prône une vision différentialiste",
      "Dénonce la hiérarchisation réductrice des sexes par l’utilisation du sport",
      "Milite pour une dimension plus artistique pour renforcer la sensibilité unique des filles"
    ],
    "answers": [0, 2],
    "level": 3
  },
  {
    "question": "Dans les IO de 1962, quel sport était jugé convenable pour les garçons mais seulement “possible” pour les filles ?",
    "options": [
      "Volley-ball",
      "Basket-ball",
      "Saut en hauteur",
      "Gymnastique acrobatique"
    ],
    "answers": [2],
    "level": 3
  },
  {
    "question": "Quelle loi établit que « les écoles, les collèges, les lycées et les établissements d’enseignement supérieur [...] contribuent à favoriser la mixité et l’égalité entre les hommes et les femmes » ?",
    "options": [
      "La Loi Haby",
      "La loi Jospin",
      "La Loi sur l’égalité homme/femme",
      "La loi Genisson"
    ],
    "answers": [1],
    "level": 3
  },
  {
    "question": "Le premier rapport de la commission européenne sur l’égalité homme-femme étendu à l’ensemble de l’union européenne est paru en :",
    "options": [
      "2002",
      "2004",
      "2006",
      "2008"
    ],
    "answers": [3],
    "level": 3
  },
  {
    "question": "L’identité sexuée est :",
    "options": [
      "Une orientation sexuelle",
      "Une représentation de soi",
      "Une représentation sociale",
      "Une orientation de genre"
    ],
    "answers": [1,2],
    "level": 3
  },
  {
    "question": "L’ « arrangement des sexes » dont parle Goffmann en 1977 signifie que :",
    "options": [
      "Les femmes doivent devenir belles et souples pour que les hommes puissent choisir une belle femme capable de leur donner des beaux enfants",
      "Les femmes restent à la maison pendant que le mari part travailler",
      "Les hommes ont l’intelligence et les femmes la beauté",
      "Les femmes doivent obéir aux volontés de leur maris"
    ],
    "answers": [1],
    "level": 3
  },
  {
    "question": "D’après les IO de 1967, les filles :",
    "options": [
      "Pratiquent l’expression corporelle et les garçons les sports de combat",
      "Pratiquent les mêmes activités que les garçons",
      "Peuvent être initiées à l’athlétisme et aux sports collectifs de petit terrain",
      "Peuvent être initiées aux sports de combat et de raquettes"
    ],
    "answers": [0,2],
    "level": 3
  },
  {
    "question": "Violette Morris est une sportive dont la carrière s’étend de 1912 à 1935 dans les sports suivants :",
    "options": [
      "Course Automobile et aviation",
      "Boxe et athlétisme",
      "Danse et gymnastique",
      "Cirque et équitation"
    ],
    "answers": [0, 1],
    "level": 3
  },
  {
    "question": "Violette Morris est une femme qui provoque un double scandale car :",
    "options": [
      "Elle affronte des hommes en boxe dans une tenue laissant apparaitre sa physionomie féminine",
      "Elle propose un courant de danse pour les garçons qui cherche à rompre les codes masculins",
      "Elle fait de la mécanique et de la course automobile",
      "Elle affirme publiquement l’infériorité des femmes"
    ],
    "answers": [0],
    "level": 3
  },
  {
    "question": "La gymnastique harmonique d’Irène Popard est :",
    "options": [
      "Réservée uniquement aux femmes",
      "Réservée uniquement aux enfants",
      "Initialement réservée aux femmes puis ouverte à tous",
      "Initialement réservée aux enfants puis ouverte aux adultes"
    ],
    "answers": [2],
    "level":3
  }
];

const les_emotions:Question[] = [
  {
    "question": "Les manifestations des émotions peuvent être d’ordre :",
    "options": [
      "Physiologique",
      "Cognitive",
      "Expressives",
      "Subjectives"
    ],
    "answers": [0, 1, 2, 3],
    "level": 1
  },
  {
    "question": "Gagnaire et Lavie dans Cultiver les émotions en 2005 prétendent que :",
    "options": [
      "L’EPS est une discipline qui implique peu d’émotions",
      "L’EPS est la discipline qui sollicite le plus les émotions",
      "L’EPS fait partie des disciplines qui sollicite le plus les émotions",
      "L’EPS est la discipline qui sollicite le moins les émotions"
    ],
    "answers": [2],
    "level": 1
  },
  {
    "question": "Selon Tcherkassof, Nico et Frijda,dans Les émotions : une conception relationnelle, en 2014, les émotions se déclenchent :",
    "options": [
      "Intentionnellement",
      "De façon non contrôlée",
      "Par une pensée",
      "Par une action"
    ],
    "answers": [1,2,3],
    "level": 1
  },
  {
    "question": "Quelle est la définition des émotions selon Christophe, dans «Les émotions,1998» ?",
    "options": [
      "Une réponse uniquement physiologique aux stimuli",
      "Un état affectif multidimensionnel avec des manifestations physiologiques, cognitives, expressives et subjectives",
      "Une réaction strictement sociale à un événement",
      "Une réponse volontaire et contrôlée par la personne"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Quels sont les trois types d’émotions identifiés par Damasio (2017) ?",
    "options": [
      "Universelles, cognitives et comportementales",
      "Primaires, secondaires et d’arrière-plan",
      "Instinctives, rationnelles et émotionnelles",
      "Sociales, rationnelles et universelles"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Quelle émotion fait partie des émotions primaires selon Damasio (2017) ?",
    "options": [
      "Embarras",
      "Culpabilité",
      "Joie",
      "Fatigue"
    ],
    "answers": [2],
    "level": 1
  },
  {
    "question": "Qu’entend-on par « décalage émotionnel optimal » selon B. Therme ?",
    "options": [
      "Éviter tout engagement émotionnel chez l’élève",
      "Respecter une intensité émotionnelle adaptée pour favoriser l’apprentissage",
      "Provoquer volontairement des émotions négatives pour renforcer l’effort",
      "Éliminer toute forme de ressenti émotionnel pendant la pratique sportive"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Dans les activités physiques, quel est le rôle des émotions selon Damasio ?",
    "options": [
      "Elles n’ont aucun impact sur les processus cognitifs",
      "Elles constituent le point de départ des processus perceptifs et décisionnels",
      "Elles ralentissent systématiquement les apprentissages",
      "Elles perturbent les processus perceptifs"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Quelle compétence développée par l’EPS au cycle 4 selon les programmes de 2015 est exacte ?",
    "options": [
      "Identifier et exprimer ses émotions en les régulant",
      "Supprimer les émotions pour éviter les distractions",
      "Renforcer exclusivement les habiletés motrices",
      "Prioriser la compétition pour développer la motivation"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Quelle émotion est une émotion secondaire selon Damasio (2017) ?",
    "options": [
      "Jalousie",
      "Joie",
      "Peur",
      "Bien-être"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Selon Damasio en 2017, les émotions permettent notamment de :",
    "options": [
      "Prendre des décisions",
      "Agir avec les autres",
      "Progresser au niveau moteur",
      "Gérer les risques"
    ],
    "answers": [0],
    "level": 1
  },
  {
    "question": "Dans quel contexte les émotions d’arrière-plan peuvent-elles influencer la perception d’une activité ?",
    "options": [
      "Lorsque l’élève est exclusivement motivé par la performance",
      "Lorsqu’un événement réactive un état émotionnel préexistant, comme la fatigue ou la déprime",
      "Lorsqu’elles sont complètement absentes",
      "Lorsqu’elles sont ignorées par l’enseignant"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Selon Méard (2015), quel est l’impact des relations entre pairs sur l’apprentissage ?",
    "options": [
      "Elles n’ont aucun effet sur la réussite scolaire",
      "Elles influencent les apprentissages et favorisent le bien-être social des élèves",
      "Elles compliquent l’environnement scolaire sans effet positif",
      "Elles sont secondaires par rapport à l’autonomie individuelle"
    ],
    "answers": [1],
    "level": 1
  },
  {
    "question": "Selon les programmes officiels, la gestion des émotions :",
    "options": [
      "Est travaillée uniquement en EPS",
      "Concernent plusieurs disciplines",
      "Est travaillée au cycle 3",
      "Est travaillée au cycle 4"
    ],
    "answers": [1,2,3],
    "level": 1
  }
]

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

    for (const question of mixite_sexuee) {
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


