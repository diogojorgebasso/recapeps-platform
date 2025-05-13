import { QuizState } from './Quiz';

export interface QuizTrail {
    id: string;
    name: string; // Name of the Quiz
    level: number;
    state: QuizState;
};