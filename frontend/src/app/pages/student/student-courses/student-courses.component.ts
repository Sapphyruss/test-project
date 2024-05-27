import { Component } from '@angular/core';
import { CCourseListComponent } from '../../../components/c-courses/c-course-list/c-course-list.component';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [
    CCourseListComponent
  ],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.scss'
})
export class StudentCoursesComponent {

}
