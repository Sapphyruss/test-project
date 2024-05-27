import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticRoutes } from '../../core/routes/static.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();
}
