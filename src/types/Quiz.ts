import { Timestamp, DocumentReference } from "firebase/firestore";

export interface AnswerOption {
    id: string;
    answer: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;                     // Unique identifier for the question
    question: string;
    answers: Array<AnswerOption>;
    explanation?: string;
}

export interface AttemptedQuestion extends Question {
    // User's interaction data for this question in this attempt
    userSelectedAnswerId?: Array<string>; // List of ID's of the answer selected by the user
    isSelectionCorrect?: boolean;         // Was the user's selection correct?
    timeSpentOnQuestion?: number;        // Time spent by the user on this question (e.g., in seconds)
}


export type QuizState = 'completed' | 'retry' | 'doing' | 'unlocked' | 'locked';

export interface Quiz { // document in Firebase ecrit-X/{id}
    id: string;
    name: string;
    level: number;
    premium: boolean;
    questions: Array<Question>;
}

export interface AttemptQuiz { // document in Firebase user/{uid}/ecrit-X/{id}
    id: string;
    createdAt: Timestamp;
    quizRef: DocumentReference;
    questions: Array<AttemptedQuestion>;
    state: QuizState;
    score: number;
    premium: boolean;
    lastQuestion: number; // 0-based index of the last question answered
}

export interface QuizDone { // OVERWRITE in Firebase user/{uid}/ecrit-X/{id}
    id: string;
    name: string;
    createdAt: Timestamp;
    completedAt: Timestamp;
    quizRef: DocumentReference;
    questions: Array<AttemptedQuestion>;
    state: "completed";
    score: number;
    premium: boolean;
    lastQuestion?: number;
}
export interface QuizAttemptDonePayload { // Payload for saving quiz results
    id: string;
    questions: Array<AttemptedQuestion>;
    score: number;
}