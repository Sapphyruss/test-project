import { Component } from '@angular/core';

// Custom elements imports
import { StaticRoutes } from '../../../core/routes/static.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-action-partial',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './register-action-partial.component.html',
  styleUrl: './register-action-partial.component.scss'
})
export class RegisterActionPartialComponent {
  staticRoutes: StaticRoutes = new StaticRoutes()

}