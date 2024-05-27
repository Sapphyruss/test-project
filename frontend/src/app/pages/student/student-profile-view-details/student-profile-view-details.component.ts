import { Component } from '@angular/core';

import { CProfileViewDetailsComponent } from '../../../components/c-profile/c-profile-view-details/c-profile-view-details.component';

@Component({
  selector: 'app-student-profile-view-details',
  standalone: true,
  imports: [
    CProfileViewDetailsComponent
  ],
  templateUrl: './student-profile-view-details.component.html',
  styleUrl: './student-profile-view-details.component.scss'
})
export class StudentProfileViewDetailsComponent {

}
