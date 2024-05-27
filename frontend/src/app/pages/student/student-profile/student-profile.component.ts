import { Component } from '@angular/core';

// Custom elements imports
import { CProfileComponent } from '../../../components/c-profile/c-profile/c-profile.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    CProfileComponent
  ],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

}
