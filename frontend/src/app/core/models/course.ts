import { CourseCategory } from "./course-category";
import { Instructor } from "./instructor";
import { Lesson } from "./lesson";
import { Review } from "./review";

export interface Course {
  id: number;
  title: string;
  lessons: Lesson[];
  instructors: Instructor[];
  material: string;
  summerQuiz: string;
  category: CourseCategory;
  reviews: Review;
  level: number;
  status: string;
  duration: number;
  rating: number;
  enrolled: number;
  totalStudent: number;
  tags: string[];
  // More

}
