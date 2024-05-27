import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom elements imports
import { StaticRoutes } from '../../core/routes/static.routes';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { QuizPartialComponent } from './quiz-partial/quiz-partial.component';
import { RegisterActionPartialComponent } from './register-action-partial/register-action-partial.component';
import { PopularPartialComponent } from './popular-partial/popular-partial.component';
import { AboutPartialComponent } from './about-partial/about-partial.component';
import { BannerPartialComponent } from './banner-partial/banner-partial.component';
import { AnimatePartialComponent } from './animate-partial/animate-partial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    TestimonialsComponent,
    QuizPartialComponent,
    RegisterActionPartialComponent,
    PopularPartialComponent,
    AboutPartialComponent,
    BannerPartialComponent,
    AnimatePartialComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  staticRoutes: StaticRoutes = new StaticRoutes()
}
