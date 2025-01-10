export interface Subject {
    id: string;
    name: string;
  }
  
  export interface Quiz {
    id: string;
    question: string;
    options: string[];
    answers: number[];
    level:number;
  }