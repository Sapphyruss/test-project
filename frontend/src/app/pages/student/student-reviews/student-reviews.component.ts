import { Component } from '@angular/core';

// Custom elements imports
import { CReviewsComponent } from '../../../components/c-reviews/c-reviews.component';

@Component({
  selector: 'app-student-reviews',
  standalone: true,
  imports: [
    CReviewsComponent
  ],
  templateUrl: './student-reviews.component.html',
  styleUrl: './student-reviews.component.scss'
})
export class StudentReviewsComponent {

}
