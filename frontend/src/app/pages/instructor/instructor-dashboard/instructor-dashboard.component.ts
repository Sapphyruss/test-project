import { Component } from '@angular/core';

// Custom elements imports
import { DashStatisticsComponent } from '../../../layout/dashboard-layout/dash-statistics/dash-statistics.component';
import { DashChartsComponent } from '../../../layout/dashboard-layout/dash-charts/dash-charts.component';
import { DashFeddbackComponent } from '../../../layout/dashboard-layout/dash-feddback/dash-feddback.component';
import { DashHeaderComponent } from '../../../layout/dashboard-layout/dash-header/dash-header.component';
import { DashNavComponent } from '../../../layout/dashboard-layout/dash-nav/dash-nav.component';
import { DashPopularInstructorComponent } from '../../../layout/dashboard-layout/dash-popular-instructor/dash-popular-instructor.component';
import { DashRecentCourseComponent } from '../../../layout/dashboard-layout/dash-recent-course/dash-recent-course.component';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [
    DashHeaderComponent,
    DashNavComponent,
    DashFeddbackComponent,
    DashPopularInstructorComponent,
    DashRecentCourseComponent,
    DashChartsComponent,
    DashStatisticsComponent,
  ],
  templateUrl: './instructor-dashboard.component.html',
  styleUrl: './instructor-dashboard.component.scss'
})
export class InstructorDashboardComponent {

}
