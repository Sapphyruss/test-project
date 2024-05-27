import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Env } from '../../../environments/env';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  staticEnv: Env = new Env();
  QUESTION_URL =  this.staticEnv.LEARNXCEL_API_URL + '/questions';
  
  constructor(private http: HttpClient) {}

  /**
   * Get all questions for a quiz
   * @param quizId
   * @returns Question[] 
  */
  getAllQuestionForQuestion(quizId: number) {
    return this.http.get<any>(`${this.staticEnv.LEARNXCEL_API_URL}/quizzes/${quizId}/questions`, {
      headers: this.staticEnv.headers
    })
  }

  /**
   * Retrieves information about a specific questio
   * @param questionId
   * @returns Question
  */
  getQuestionById(questionId: number) {
    return this.http.get<any>(`${this.QUESTION_URL}/questions/${questionId}`, {
      headers: this.staticEnv.headers
    })
  }

  /**
   * Create new question
   * @param question
   * @returns Question
  */
  createQuestion(question: any) {
    return this.http.post<any>(`${this.QUESTION_URL}`, question, {
      headers: this.staticEnv.headers
    })
  }

  /**
   * Update question
   * @param question
   * @returns Question
  */
  updateQuestion(question: any) {
    return this.http.put<any>(`${this.QUESTION_URL}/${question.id}`, question, {
      headers: this.staticEnv.headers
    })
  }

  /**
   * Delete question by question id
   * @param question
   * @returns Question
  */
  deleteQuestion(question: any) {
    return this.http.delete<any>(`${this.QUESTION_URL}/${question.id}`, {
      headers: this.staticEnv.headers
    })
  }
}
