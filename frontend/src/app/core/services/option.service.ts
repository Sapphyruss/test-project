import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Env } from '../../../environments/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  staticEnv: Env = new Env();
  OPTION_URL =  this.staticEnv.LEARNXCEL_API_URL + '/options';
  
  constructor(private http: HttpClient) {}

  /**
   * Get All Options for a Question
   * @returns options[]
   */
  getOptions(questionId: number): Observable<any> {
    return this.http.get(`${this.staticEnv.LEARNXCEL_API_URL}/questions/${questionId}/options`, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * Retrieves information about a specific option
   * @param optionId
   * @returns Option
   */
  getOptionById(optionId: number): Observable<any> {
    return this.http.get(`${this.OPTION_URL}/${optionId}`, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * Create new option
   * @param option
   * @returns Option
   */
  createOption(option: any): Observable<any> {
    return this.http.post(`${this.OPTION_URL}`, option, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * Update Option
   * @param option
   * @returns Option
   */
  updateOption(option?: any, optionId?: number): Observable<any> {
    return this.http.put(`${this.OPTION_URL}/${optionId}`, option, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * Delete Option
   * @param optionId
   * @returns Option
   */
  deleteOption(optionId: number): Observable<any> {
    return this.http.delete(`${this.OPTION_URL}/${optionId}`, {
      headers: this.staticEnv.headers,
    });
  }
}
