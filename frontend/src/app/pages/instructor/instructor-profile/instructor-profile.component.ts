import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DashFeddbackComponent } from '../../../layout/dashboard-layout/dash-feddback/dash-feddback.component';
import { DashHeaderComponent } from '../../../layout/dashboard-layout/dash-header/dash-header.component';
import { DashNavComponent } from '../../../layout/dashboard-layout/dash-nav/dash-nav.component';
import { DashPopularInstructorComponent } from '../../../layout/dashboard-layout/dash-popular-instructor/dash-popular-instructor.component';
import { DashRecentCourseComponent } from '../../../layout/dashboard-layout/dash-recent-course/dash-recent-course.component';
import { DashStatisticsComponent } from '../../../layout/dashboard-layout/dash-statistics/dash-statistics.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CProfileComponent } from '../../../components/c-profile/c-profile/c-profile.component';

@Component({
  selector: 'app-instructor-profile',
  standalone: true,
  imports: [
    CommonModule,
    DashHeaderComponent,
    DashNavComponent,
    DashFeddbackComponent,
    DashPopularInstructorComponent,
    DashRecentCourseComponent,
    DashStatisticsComponent,
    ProfileDetailsComponent,
    CProfileComponent
  ],
  templateUrl: './instructor-profile.component.html',
  styleUrl: './instructor-profile.component.scss'
})
export class InstructorProfileComponent {

}
