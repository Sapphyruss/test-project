import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom elements imports below
import { StaticRoutes } from '../../core/routes/static.routes';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();

}
