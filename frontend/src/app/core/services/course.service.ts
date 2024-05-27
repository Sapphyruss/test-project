import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Custom Imports
import { Observable } from 'rxjs';
import { Course, Lesson } from '../models/index.models';
import { Env } from '../../../environments/env';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  staticEnv: Env = new Env();

  constructor(private http: HttpClient) {}

  COURSE_URL =  this.staticEnv.LEARNXCEL_API_URL + '/courses';

  getAllCourses(): Observable<Course> {
    return this.http.get<Course>(`${this.COURSE_URL}/courses}`, { headers: this.staticEnv.headers });
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.COURSE_URL}/${courseId}`, { headers: this.staticEnv.headers });
  }

  /**
   * getAllLessonOfCourseByCourseId - get all lessons of a course
   * @param courseId 
   * @returns 
   */
  getAllLessonOfCourseByCourseId(courseId: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.COURSE_URL}/${courseId}/lessons`, { headers: this.staticEnv.headers });
  }

  /**
   * Update Lesson Information
   * @param lessonId 
   * @returns 
   */
  updateLessonOfCourse(lessonId: number): Observable<any> {
    return this.http.put<any>(`${this.staticEnv.LEARNXCEL_API_URL}/lessons/${lessonId}`, { headers: this.staticEnv.headers });
  }
  /**
   * createCourse - create new course
   * @param course 
   * @returns 
   */
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.COURSE_URL}`, course, { headers: this.staticEnv.headers });
  }

  /**
   * updateCourse - update course
   * @param course 
   * @returns 
   */
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.COURSE_URL}/${course.id}`, course, { headers: this.staticEnv.headers });
  }

  /**
   * deleteCourseById - delete course
   * @param courseId 
   * @returns 
   */
  deleteCourseById(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.COURSE_URL}/${courseId}`, { headers: this.staticEnv.headers });
  }

  /**
   * deleteLessonById - Delete Lesson
   * @param lessonId 
   * @returns 
   */
  deleteLessonById(lessonId: number): Observable<any> {
    return this.http.delete<any>(`${this.staticEnv.LEARNXCEL_API_URL}/lessons/${lessonId}`, { headers: this.staticEnv.headers });
  }
}
