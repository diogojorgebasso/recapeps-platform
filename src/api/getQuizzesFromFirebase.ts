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
  level: number
): Promise<Quiz[]> => {
  try {
    const distribution = calculateDistribution(level);
    let allQuestions: Quiz[] = [];

    for (const [targetLevel, count] of Object.entries(distribution)) {
      const levelDocRef = doc(
        db,
        "subjects",
        subjectId,
        "quizz",
        `level-${targetLevel}`
      );

      // Fetch the level document
      const levelDocSnapshot = await getDoc(levelDocRef);

      if (!levelDocSnapshot.exists()) {
        console.error(
          `No data found for subject ${subjectId} at level ${level}`
        );
        continue; // Skip to next level instead of returning empty array
        //  hoping to catch data in the next level in case of a temporary error
      }

      const levelData = levelDocSnapshot.data();
      const questions = Object.keys(levelData.questions).map((key) => ({
        id: key,
        ...levelData.questions[key],
        evaluation: levelData.evaluation,
        level: Number(targetLevel), // Add the level parameter to each question
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
