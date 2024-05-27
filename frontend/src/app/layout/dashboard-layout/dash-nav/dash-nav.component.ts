import { Component } from '@angular/core';

// Custom Components
import { DashNavAdminComponent } from './dash-nav-admin/dash-nav-admin.component';
import { DashNavInstructorComponent } from './dash-nav-instructor/dash-nav-instructor.component';
import { DashNavStudentComponent } from './dash-nav-student/dash-nav-student.component';

@Component({
  selector: 'app-dash-nav',
  standalone: true,
  imports: [DashNavAdminComponent, DashNavInstructorComponent, DashNavStudentComponent],
  templateUrl: './dash-nav.component.html',
  styleUrl: './dash-nav.component.scss'
})
export class DashNavComponent {
  isStudent: boolean = true;
  isInstructor: boolean = false;
  isAdmin: boolean = false;
}
