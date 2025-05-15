import { db } from "@/lib/firebase/clientApp";
import { doc } from "firebase/firestore";
import { AttemptQuiz, QuizState, Question, QuizDone } from "@/types/Quiz"; // Added Question
import {
    findActiveAttempt, fetchBaseQuiz,
    createAttempt, findCompletedAttempts, fetchUserWrongQuestionIds
} from "@/repositories/quizRepo";

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Fetches the appropriate quiz data for a user attempt.
 * It checks for an active attempt first. If none exists, it fetches the base quiz
 * definition and selects questions based on prior performance to start a new attempt.
 */
export async function getQuizForAttempt(numberOfEcrit: number, quizId: string, uid: string, nQuestions: number = 8): Promise<AttemptQuiz> {
    try {
        // 1. Check for an active attempt
        let attempt = await findActiveAttempt(numberOfEcrit, quizId, uid);
        if (attempt) {
            console.log("Found active attempt:", attempt.id);
            return attempt;
        }

        // 2. No active attempt, fetch the base quiz definition
        const baseQuiz = await fetchBaseQuiz(numberOfEcrit, quizId);
        if (!baseQuiz) {
            throw new Error(`Base quiz not found for ecrit-${numberOfEcrit}, quizId: ${quizId}`);
        }

        // 3. Fetch IDs of questions the user previously got wrong for this quiz
        const wrongQuestionIds = await fetchUserWrongQuestionIds(numberOfEcrit, quizId, uid);

        // 4. Select questions for the new attempt
        let questionsForAttempt: Question[] = [];
        const priorityPool = baseQuiz.questions.filter(q => wrongQuestionIds.has(q.id));
        const shuffledPriority = shuffleArray(priorityPool);
        questionsForAttempt.push(...shuffledPriority);

        // If not enough questions, add from other pool (new or previously correct)
        if (questionsForAttempt.length < nQuestions) {
            const neededFromOther = nQuestions - questionsForAttempt.length;
            const otherPool = baseQuiz.questions.filter(q => !wrongQuestionIds.has(q.id));
            questionsForAttempt.push(...shuffleArray(otherPool).slice(0, neededFromOther));
        }

        // Ensure the total does not exceed nQuestions.
        // If priority questions alone were more than nQuestions, this will trim them.
        // The shuffle ensures fairness if trimming happens.
        if (questionsForAttempt.length > nQuestions) {
            questionsForAttempt = questionsForAttempt.slice(0, nQuestions);
        }

        // 5. If questions are available, create a new attempt document in Firestore
        const newAttemptData = {
            quizRef: doc(db, `ecrit-${numberOfEcrit}`, quizId),
            name: baseQuiz.name,
            state: "doing" as QuizState,
            questions: questionsForAttempt, // Use the carefully selected questions
            score: 0,
            lastQuestion: 0,
            premium: baseQuiz.premium, // I'm not sure if I need this.
        };

        attempt = await createAttempt(numberOfEcrit, uid, newAttemptData);
        console.log("Created new attempt:", attempt.id);
        return attempt;
    }
    catch (error) {
        console.error("Error in getQuizForAttempt service:", error);
        throw new Error(`Failed to get or create quiz attempt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Fetches the history of completed quiz attempts for a user.
 */
export async function getQuizHistory(uid: string, numberOfEcrit: number, limit: number = 5): Promise<QuizDone[]> {
    try {
        const history = await findCompletedAttempts({
            database: db,
            uid,
            numberOfEcrit,
            limitResult: limit
        });
        return history;
    } catch (error) {
        console.error("Error fetching quiz history in service:", error);
        throw new Error(`Failed to fetch quiz history: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// Add other quiz-related business logic functions here, e.g.:
// export async function submitAnswer(attemptId: string, questionId: string, answer: string, uid: string): Promise<void> { ... }
// export async function completeAttempt(attemptId: string, score: number, uid: string): Promise<void> { ... }
// export function calculateScore(attempt: AttemptQuiz): number { ... }
