import { Component } from '@angular/core';
import { CQuizAttemptsComponent } from '../../../../components/c-quiz-attempts/c-quiz-attempts.component';

@Component({
  selector: 'app-quiz-attempts',
  standalone: true,
  imports: [CQuizAttemptsComponent],
  templateUrl: './quiz-attempts.component.html',
  styleUrl: './quiz-attempts.component.scss'
})
export class QuizAttemptsComponent {

}
