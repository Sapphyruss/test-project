import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Cutom component imports below
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { DashFeddbackComponent } from './dash-feddback/dash-feddback.component';
import { DashPopularInstructorComponent } from './dash-popular-instructor/dash-popular-instructor.component';
import { DashRecentCourseComponent } from './dash-recent-course/dash-recent-course.component';
import { DashChartsComponent } from './dash-charts/dash-charts.component';
import { DashStatisticsComponent } from './dash-statistics/dash-statistics.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    DashHeaderComponent,
    DashNavComponent,
    DashFeddbackComponent,
    DashPopularInstructorComponent,
    DashRecentCourseComponent,
    DashChartsComponent,
    DashStatisticsComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {
  @Input() charts: boolean = false;
  
  
  isStudent: boolean = false;
  isInstructor: boolean = true;
  isAdmin: boolean = false;
}
