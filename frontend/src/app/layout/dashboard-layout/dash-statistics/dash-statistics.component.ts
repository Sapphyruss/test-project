import { Component } from '@angular/core';

// Custom elements imports
import { AdminStatsComponent } from './admin-stats/admin-stats.component';
import { InstructorStatsComponent } from './instructor-stats/instructor-stats.component';
import { StudentStatsComponent } from './student-stats/student-stats.component';

@Component({
  selector: 'app-dash-statistics',
  standalone: true,
  imports: [
    AdminStatsComponent,
    InstructorStatsComponent,
    StudentStatsComponent
  ],
  templateUrl: './dash-statistics.component.html',
  styleUrl: './dash-statistics.component.scss'
})
export class DashStatisticsComponent {
  isAdmin: boolean = false;
  isInstructor: boolean = false;
  isStudent: boolean = true;
}
