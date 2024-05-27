import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Env } from '../../../environments/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  staticEnv: Env = new Env();
  QUIZ_URL =  this.staticEnv.LEARNXCEL_API_URL + '/quizzes';

  constructor(private http: HttpClient) {}


  /**
   * getAllQuizzesOfLesson - Get all guiz
   * @returns Quiz[]
   */
  getAllQuizzesOfLesson(lessonId: number): Observable<any> {
    return this.http.get<any>(`${this.staticEnv.LEARNXCEL_API_URL}/lessons/${lessonId}/quizzes`, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * getQuizById - Get quiz by id
   * @param quizId
   * @returns Quiz
   */
  getQuizById(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.QUIZ_URL}/${quizId}`, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * createQuiz - Create new quiz
   * @param quiz
   * @returns Quiz
   */
  createQuiz(quiz: any): Observable<any> {
    return this.http.post<any>(`${this.QUIZ_URL}`, quiz, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * updateQuiz - Update quiz
   * @param quiz
   * @returns Quiz
   */
  updateQuiz(quiz: any): Observable<any> {
    return this.http.put<any>(`${this.QUIZ_URL}/${quiz.id}`, quiz, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * deleteQuizById - Delete quiz
   * @param quizId
   * @returns
   */
  deleteQuizById(quizId: number): Observable<any> {
    return this.http.delete<any>(`${this.QUIZ_URL}/${quizId}`, {
      headers: this.staticEnv.headers,
    });
  }
}
