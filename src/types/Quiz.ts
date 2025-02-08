export interface Subject {
  id: string;
  name: string;
  image: string;
  description: string;
  note: number;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  answers: number[];
  level: number;
  evaluation: number;
}
