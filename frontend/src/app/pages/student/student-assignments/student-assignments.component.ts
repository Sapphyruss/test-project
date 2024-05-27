import { Component } from '@angular/core';
import { CAssignmentsComponent } from '../../../components/c-assignments/c-assignments.component';

@Component({
  selector: 'app-student-assignments',
  standalone: true,
  imports: [
    CAssignmentsComponent
  ],
  templateUrl: './student-assignments.component.html',
  styleUrl: './student-assignments.component.scss'
})
export class StudentAssignmentsComponent {

}
