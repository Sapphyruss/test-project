import { Course } from "./course";
import { User } from "./user";

export interface Instructor extends User {
  courses: Course[];
  // More
}