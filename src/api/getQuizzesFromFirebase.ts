import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Quiz } from "@/types/Quiz";

interface QuestionDistribution {
  [level: number]: number; // level -> number of questions to fetch
}

const calculateDistribution = (
  currentLevel: number,
  totalQuestions: number = 8
): QuestionDistribution => {
  const distribution: QuestionDistribution = {};

  // Current level gets at least 50% of questions
  distribution[currentLevel] = Math.ceil(totalQuestions * 0.5);

  // Distribute remaining questions among previous levels
  const remainingQuestions = totalQuestions - distribution[currentLevel];
  const previousLevels = currentLevel - 1;

  if (previousLevels > 0) {
    // Calculate questions per previous level
    const questionsPerLevel = Math.floor(remainingQuestions / previousLevels);

    for (let level = 1; level < currentLevel; level++) {
      distribution[level] = questionsPerLevel;
    }

    // Add any remaining questions to the most recent previous level
    const distributed = Object.values(distribution).reduce((a, b) => a + b, 0);
    if (distributed < totalQuestions && currentLevel > 1) {
      distribution[currentLevel - 1] += totalQuestions - distributed;
    }
  } else {
    // If no previous levels, all questions come from current level
    distribution[currentLevel] = totalQuestions;
  }
  return distribution;
};

// Function to fetch quizzes of a specific subject and level
export const fetchQuizzesBySubject = async (
  subjectId: string,
  uid: string
): Promise<Quiz[]> => {
  try {
    // Fetch user data to determine subject level
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() || {};
    const subjectLevels = userData.subjectLevels || {};
    const level = subjectLevels[subjectId] || 1;

    const distribution = calculateDistribution(level);
    let allQuestions: Quiz[] = [];

    for (const [targetLevel, count] of Object.entries(distribution)) {
      let levelKey = `level-${targetLevel}`;
      let levelDocRef = doc(db, "subjects", subjectId, "quizz", levelKey);
      let levelDocSnapshot = await getDoc(levelDocRef);

      // Fallback if level document does not exist and targetLevel is greater than 1
      if (!levelDocSnapshot.exists() && Number(targetLevel) > 1) {
        let found = false;
        for (
          let fallback = Number(targetLevel) - 1;
          fallback >= 1;
          fallback--
        ) {
          levelKey = `level-${fallback}`;
          levelDocRef = doc(db, "subjects", subjectId, "quizz", levelKey);
          levelDocSnapshot = await getDoc(levelDocRef);
          if (levelDocSnapshot.exists()) {
            found = true;
            break;
          }
        }
        if (!found) {
          console.error(
            `No data found for subject ${subjectId} at fallback levels for target level ${targetLevel}`
          );
          continue;
        }
      }

      if (!levelDocSnapshot.exists()) {
        console.error(
          `No data found for subject ${subjectId} at level ${targetLevel}`
        );
        continue;
      }

      const levelData = levelDocSnapshot.data();
      const questions = Object.keys(levelData.questions).map((key) => ({
        id: key,
        ...levelData.questions[key],
        evaluation: levelData.evaluation,
        level: Number(targetLevel), // level set to the originally targeted level
      }));

      const selectedQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      allQuestions = [...allQuestions, ...selectedQuestions];
    }
    // Final shuffle of all selected questions
    return allQuestions.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return [];
  }
};
