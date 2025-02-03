import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Quiz } from "@/types/Quiz";

// Function to fetch quizzes of a specific subject and level
export const fetchQuizzesBySubject = async (
  subjectId: string,
  level: number
): Promise<Quiz[]> => {
  try {
    // Reference the specific level document
    const levelDocRef = doc(
      db,
      "subjects",
      subjectId,
      "quizz",
      `level-${level}`
    );

    // Fetch the level document
    const levelDocSnapshot = await getDoc(levelDocRef);

    if (!levelDocSnapshot.exists()) {
      console.error(`No data found for subject ${subjectId} at level ${level}`);
      return [];
    }

    // Extract questions data
    const levelData = levelDocSnapshot.data();
    const questions = Object.keys(levelData.questions || {}).map((key) => ({
      id: key,
      ...levelData.questions[key],
      level, // Add the level parameter to each question
    }));

    // Shuffle the questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // Return the first 10 shuffled quizzes
    return shuffledQuestions.slice(0, 8) as Quiz[];
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return [];
  }
};
