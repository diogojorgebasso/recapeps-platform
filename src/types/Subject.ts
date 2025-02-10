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

export interface SubjectNote {
  id: string;
  name: string;
  image: string;
  evaluation: number;
  premium: boolean;
  link: string;
}
