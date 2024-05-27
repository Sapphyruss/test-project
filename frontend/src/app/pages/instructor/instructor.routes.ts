import { Routes } from '@angular/router';

// Custom elements imports
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { DashboardLayoutComponent } from '../../layout/dashboard-layout/dashboard-layout.component';
import { InstructorCoursesComponent } from './instructor-courses/instructor-courses.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InstructorReviewsComponent } from './instructor-reviews/instructor-reviews.component';
import { QuizAttemptsComponent } from './instructor-quiz/quiz-attempts/quiz-attempts.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SettingsComponent } from './settings/settings.component';
import { InstructorProfileViewDetailsComponent } from './instructor-profile-view-details/instructor-profile-view-details.component';

export const INSTRUCTOR_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', component: InstructorDashboardComponent },
      { path: 'my-courses', component: InstructorCoursesComponent },
      { path: 'profile', component: InstructorProfileComponent },
      { path: 'courses', component: InstructorCoursesComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'reviews', component: InstructorReviewsComponent },
      { path: 'quiz-attempts', component: QuizAttemptsComponent },
      { path: 'assignments', component: AssignmentsComponent },
      { path: 'account-settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: ':instructorId/profile-details', component: InstructorProfileViewDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
