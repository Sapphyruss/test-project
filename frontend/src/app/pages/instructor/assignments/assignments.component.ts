import { Component } from '@angular/core';
import { CAssignmentsComponent } from '../../../components/c-assignments/c-assignments.component';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CAssignmentsComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss'
})
export class AssignmentsComponent {

}
