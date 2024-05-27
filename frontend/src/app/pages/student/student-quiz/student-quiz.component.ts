import { Component } from '@angular/core';

// Custom elements imports
import { CQuizAttemptsComponent } from '../../../components/c-quiz-attempts/c-quiz-attempts.component';

@Component({
  selector: 'app-student-quiz',
  standalone: true,
  imports: [
    CQuizAttemptsComponent
  ],
  templateUrl: './student-quiz.component.html',
  styleUrl: './student-quiz.component.scss'
})
export class StudentQuizComponent {

}
