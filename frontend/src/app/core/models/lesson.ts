import { Quiz } from "./quiz";

export interface Lesson {
  id: number;
  title: string;
  contents: string;
  material: string;
  summerQuiz: Quiz[];
  // More

}
