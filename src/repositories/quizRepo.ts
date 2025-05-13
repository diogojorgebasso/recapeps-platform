import { Quiz, Question, AttemptQuiz, QuizDone } from "@/types/Quiz";
import { QuizTrail } from "@/types/TreeSkill";
import { db } from "@/lib/firebase/clientApp";
import { collection, getDocs, query, where, limit, doc, getDoc, orderBy, serverTimestamp, addDoc, Firestore } from "firebase/firestore";

/**
 * Finds an active (state === 'doing') quiz attempt for a user.
 */
export async function findActiveAttempt(numberOfEcrit: number, quizId: string, uid: string): Promise<AttemptQuiz | null> {
    try {
        const userQuizAttemptsRef = collection(db, "users", uid, `ecrit-${numberOfEcrit}`);
        const activeQuizQuery = query(userQuizAttemptsRef, where("quizRef", "==", doc(db, `ecrit-${numberOfEcrit}`, quizId)), where("state", "==", "doing"), limit(1))
        const activeQuizSnapshot = await getDocs(activeQuizQuery);
        activeQuizSnapshot.forEach((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
            } as AttemptQuiz;
        });
        return null;

    } catch (error) {
        console.error("Error finding active quiz attempt:", error);
        throw new Error(`Failed to find active quiz attempt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Fetches the base definition of a quiz.
 */
export async function fetchBaseQuiz(numberOfEcrit: number, quizId: string): Promise<Quiz | null> {
    try {

        const quizDocRef = doc(db, `ecrit-${numberOfEcrit}/${quizId}`);
        const quizSnapshot = await getDoc(quizDocRef);

        if (quizSnapshot.exists()) {
            const data = quizSnapshot.data();
            if (data) {
                return {
                    id: quizSnapshot.id,
                    name: data.name,
                    level: data.level,
                    premium: data.premium,
                    questions: data.questions as Question[],
                } as Quiz;
            }
        }
        return null;
    } catch (error) {
        console.error("Error fetching base quiz:", error);
        throw new Error(`Failed to fetch base quiz: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Fetches the IDs of questions answered incorrectly by the user for a specific quiz,
 * considering only the latest attempt for each question.
 */
export async function fetchUserWrongQuestionIds(numberOfEcrit: number, quizId: string, uid: string): Promise<Set<string>> {
    try {
        const answeredQuestionsRef = collection(db, "users", uid, `ecrit-${numberOfEcrit}`);
        const q = query(answeredQuestionsRef, where("state", "==", "completed"), where("quizRef", "==", doc(db, `ecrit-${numberOfEcrit}/${quizId}`)), orderBy("createdAt", "asc"))
        const querySnapshot = await getDocs(q);

        const latestQuestionCorrectness = new Map<string, boolean>();

        querySnapshot.forEach((doc) => {
            const attemptData = doc.data();
            const questionsInAttempt = attemptData.questions;
            for (const question of questionsInAttempt) {
                latestQuestionCorrectness.set(question.id, question.isSelectionCorrect);
            }
        });

        const wrongQuestionsSet = new Set<string>();
        latestQuestionCorrectness.forEach((isCorrect, questionId) => {
            if (!isCorrect) {
                wrongQuestionsSet.add(questionId);
            }
        });

        return wrongQuestionsSet;

    } catch (error) {
        console.error("Error fetching user answered questions:", error);
        throw new Error(`Failed to fetch user answered questions: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Receives an Parcial Attempt Document, add to DB 
 * and return the values Attempt Document from Server. 
 */
export async function createAttempt(
    numberOfEcrit: number,
    uid: string,
    attemptData: Omit<AttemptQuiz, "id" | "createdAt">
): Promise<AttemptQuiz> {
    try {

        const userQuizAttemptsRef = collection(db, "users", uid, `ecrit-${numberOfEcrit}`);
        const newAttemptRef = await addDoc(userQuizAttemptsRef, {
            ...attemptData,
            createdAt: serverTimestamp()
        });

        return {
            id: newAttemptRef.id,
            createdAt: serverTimestamp(),
            ...attemptData,
        } as AttemptQuiz;

    } catch (error) {
        console.error("Error creating quiz attempt:", error);
        throw new Error(`Failed to create quiz attempt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function getProgressOverview(uid: string | undefined, numberOfEcrit: number) {
    if (!uid) {
        throw new Error("User ID is undefined. Cannot fetch progress overview.");
    }

    try {
        const progressOverviewRef = doc(db, "users", uid, `ecrit-${numberOfEcrit}`, "progressOverview");
        const progressOverviewSnapshot = await getDoc(progressOverviewRef);

        if (progressOverviewSnapshot.exists()) {
            console.log("Progress overview data:", progressOverviewSnapshot.data());
            const progressOverviewData = progressOverviewSnapshot.data();

            // Create an array to store the QuizTrail objects
            const quizTrails: QuizTrail[] = [];

            // Iterate through each field in the document
            Object.entries(progressOverviewData).forEach(([id, data]) => {
                // Add the QuizTrail to the array
                quizTrails.push({
                    id,
                    name: data.name,
                    level: data.level,
                    state: data.state
                } as QuizTrail);
            });

            return quizTrails;
        }
        return [];
    } catch (error) {
        console.error("Error fetching progress overview:", error);
        throw new Error(`Failed to fetch progress overview: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Fetches completed quiz attempts for a user.
 */
export async function findCompletedAttempts({ database = db, uid, numberOfEcrit, limitResult = 5 }:
    {
        database?: Firestore,
        uid: string,
        numberOfEcrit: number,
        limitResult?: number
    }
) {
    try {

        const userAttemptsRef = collection(database, "users", uid, `ecrit-${numberOfEcrit}`);
        const completedQuizzesQuery = query(userAttemptsRef
            , where("state", "==", "completed")
            , orderBy("completedAt", "desc")
            , limit(limitResult))

        const completedQuizzesSnapshot = await getDocs(completedQuizzesQuery)

        const quizHistory = completedQuizzesSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data
            } as QuizDone;
        });

        return quizHistory;

    } catch (error) {
        console.error("Error fetching quiz history:", error);
        throw new Error(`Failed to fetch quiz history: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

