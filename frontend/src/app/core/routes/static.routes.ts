import { HttpHeaders } from "@angular/common/http";

export class StaticRoutes {
  private basePath: string = '';  
  private auth: string = `${this.basePath}/auth`;
  private admin: string = `${this.basePath}/owner/admin`;
  private instructor: string = `${this.basePath}/instructor`;
  private student: string = `${this.basePath}/student`;

  // GLOBAL ROUTES
  HOME: string = `${this.basePath}`;
  COURSES: string = `${this.basePath}/courses`;
  COURSES_NEW: string = `${this.basePath}/courses/new`;
  QUIZ: string = `${this.basePath}/quiz`;
  TEAM: string = `${this.basePath}/team`;
  CONTACT: string = `${this.basePath}/contact`;
  BECOME_AN_INSTRUCTOR: string = `${this.basePath}/publics/become-an-instructor`;
  BECOME_A_STUDENT: string = `${this.basePath}/publics/become-a-student`;
  
  // AUTH ROUTES
  AUTH: string = `${this.auth}`;
  AUTH_SIGNIN: string = `${this.auth}/signin`;

  // ADMIN ROUTES
  ADMIN_DASHBOARD: string = `${this.admin}/dashboard`;
  ADMIN_PROFILE: string = `${this.admin}/profile`;
  ADMIN_COURSES: string = `${this.admin}/courses`;
  ADMIN_REVIEWS: string = `${this.admin}/reviews`;
  ADMIN_SETTINGS: string = `${this.admin}/settings`;
  ADMIN_ANNOUNCEMENTS: string = `${this.admin}/announcements`;

  // INSTRUCTOR ROUTES
  INSTRUCTOR_DASHBOARD: string = `${this.instructor}/dashboard`;
  INSTRUCTOR_PROFILE: string = `${this.instructor}/profile`;
  INSTRUCTOR_COURSES: string = `${this.instructor}/courses`;
  INSTRUCTOR_QUIZ: string = `${this.instructor}/quiz`;
  INSTRUCTOR_REVIEW: string = `${this.instructor}/reviews`;
  INSTRUCTOR_ACCOUNT_SETTINGS: string = `${this.instructor}/account-settings`;
  INSTRUCTOR_FAVORITES: string = `${this.instructor}/favorites`;
  INSTRUCTOR_QUIZ_ATTEMPTS: string = `${this.instructor}/quiz-attempts`;
  INSTRUCTOR_ASSIGNMENTS: string = `${this.instructor}/assignments`;

  // STUDENT ROUTES
  STUDENT_DASHBOARD: string = `${this.student}/dashboard`;
  STUDENT_PROFILE: string = `${this.student}/profile`;
  STUDENT_COURSES: string = `${this.student}/courses`;
  STUDENT_FAVORITES: string = `${this.student}/favorites`;
  STUDENT_QUIZ_ATTEMPTS: string = `${this.student}/quiz-attempts`;
  STUDENT_ASSIGNMENTS: string = `${this.instructor}/assignments`;
  STUDENT_REVIEW: string = `${this.student}/reviews`;
  STUDENT_ACCOUNT_SETTINGS: string = `${this.student}/account-settings`;

}
