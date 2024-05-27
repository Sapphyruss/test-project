import { Routes } from '@angular/router';

// Custom elements imports
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { DashboardLayoutComponent } from '../../layout/dashboard-layout/dashboard-layout.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentFavoritesComponent } from './student-favorites/student-favorites.component';
import { StudentReviewsComponent } from './student-reviews/student-reviews.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { SettingsComponent } from './settings/settings.component';

export const STUDENT_ROUTES: Routes = [
  { path: '', component: DashboardLayoutComponent,
    children: [ 
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'courses', component: StudentCoursesComponent },
      { path: 'profile', component: StudentProfileComponent },
      { path: 'favorites', component: StudentFavoritesComponent },
      { path: 'reviews', component: StudentReviewsComponent },
      { path: 'quiz-attempts', component: StudentQuizComponent },
      { path: 'assignments', component: StudentAssignmentsComponent },
      { path: 'account-settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];
