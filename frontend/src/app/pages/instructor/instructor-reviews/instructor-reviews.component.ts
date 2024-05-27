import { Component } from '@angular/core';

// Custom components imports
import { CReviewsComponent } from '../../../components/c-reviews/c-reviews.component';

@Component({
  selector: 'app-instructor-reviews',
  standalone: true,
  imports: [CReviewsComponent],
  templateUrl: './instructor-reviews.component.html',
  styleUrl: './instructor-reviews.component.scss'
})
export class InstructorReviewsComponent {

}
