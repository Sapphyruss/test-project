import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Custom Imports
import { Env } from '../../../environments/env';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  staticEnv: Env = new Env();

  constructor(private http: HttpClient) {}

  API_URL = this.staticEnv.LEARNXCEL_API_URL + '/auth';

  /**
   * Log in as an existing user and generate a JWT token.
   * @param userData
   * @returns
   */
  login(userData: any) {
    return this.http
      .post(`${this.API_URL}/login`, userData, {
        headers: this.staticEnv.headers,
      })
      .pipe(
        catchError((error: any) => {
          console.error('Login failed:', error);
          throw error;
        })
      );
  }

  /**
   * Register a new user.
   * @param userData
   * @returns
   */
  register(userData: any) {
    return this.http
      .post(`${this.API_URL}/register`, userData, {
        headers: this.staticEnv.headers,
      })
      .pipe(
        catchError((error: any) => {
          console.error('Regitration failed:', error);
          throw error;
        })
      );
  }

  /**
   * Update User Information
   * @param user_id 
   * @param userData 
   * @returns 
   */
  updateUser(user_id: number, userData?: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/users/${user_id}`, userData, {
      headers: this.staticEnv.headers,
    });
  }
  
  /**
   * Log out of the current user and invalidate the JWT token
   * @param param
   * @returns
   */
  logoutCurrentUser(param?: any): Observable<any> {
    this.logout();
    return this.http.post(`${this.API_URL}/logout`, param, {
      headers: this.staticEnv.headers,
    });
  }

  /**
   * Retrieve information about the currently authenticated user
   * @param user_id
   * @returns
   */
  currentUser(user_id: number): Observable<any> {
    const cu = this.http.get(`${this.API_URL}/users/${user_id}`, {
      headers: this.staticEnv.headers,
    });
    return cu;
  }

  /**
   * Delete the current user account
   * @param user_id
   * @returns
   */
  deleteUser(user_id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${user_id}`, {
      headers: this.staticEnv.headers,
    });
  }

  logout(): void {
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }, 2000);
  }
}
