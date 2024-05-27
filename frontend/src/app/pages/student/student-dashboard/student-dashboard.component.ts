import { Component } from '@angular/core';

// Custom elements imports
import { DashChartsComponent } from '../../../layout/dashboard-layout/dash-charts/dash-charts.component';
import { DashFeddbackComponent } from '../../../layout/dashboard-layout/dash-feddback/dash-feddback.component';
import { DashHeaderComponent } from '../../../layout/dashboard-layout/dash-header/dash-header.component';
import { DashNavComponent } from '../../../layout/dashboard-layout/dash-nav/dash-nav.component';
import { DashPopularInstructorComponent } from '../../../layout/dashboard-layout/dash-popular-instructor/dash-popular-instructor.component';
import { DashRecentCourseComponent } from '../../../layout/dashboard-layout/dash-recent-course/dash-recent-course.component';
import { DashStatisticsComponent } from '../../../layout/dashboard-layout/dash-statistics/dash-statistics.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    DashNavComponent,
    DashFeddbackComponent,
    DashStatisticsComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

}
