import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom elements imports
import { StaticRoutes } from '../../../core/routes/static.routes';

@Component({
  selector: 'app-quiz-partial',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './quiz-partial.component.html',
  styleUrl: './quiz-partial.component.scss'
})
export class QuizPartialComponent {
  staticRoutes: StaticRoutes = new StaticRoutes()

}
