import { Answer } from "./answer"

export interface Question {
  id: number
  title: string
  answers: Answer[]
  created_at: string
  lesson_id: number
}