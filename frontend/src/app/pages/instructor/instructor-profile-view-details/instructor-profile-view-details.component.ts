import { Component } from '@angular/core';

import { CProfileViewDetailsComponent } from '../../../components/c-profile/c-profile-view-details/c-profile-view-details.component';

@Component({
  selector: 'app-instructor-profile-view-details',
  standalone: true,
  imports: [
    CProfileViewDetailsComponent
  ],
  templateUrl: './instructor-profile-view-details.component.html',
  styleUrl: './instructor-profile-view-details.component.scss'
})
export class InstructorProfileViewDetailsComponent {

}
