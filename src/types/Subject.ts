export interface Subject {
  id: string;
  name: string;
  image: string;
  evaluation: number;
  premium: boolean;
}

export interface SubjectFlashCard {
  id: string;
  name: string;
  evaluation: number;
  image: string;
  premium: boolean;
  flashcards: boolean;
}
