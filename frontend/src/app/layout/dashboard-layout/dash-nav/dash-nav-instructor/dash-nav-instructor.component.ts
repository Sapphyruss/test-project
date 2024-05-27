import { Component } from '@angular/core';

// Custom elements imports
import { StaticRoutes } from '../../../../core/routes/static.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dash-nav-instructor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dash-nav-instructor.component.html',
  styleUrl: './dash-nav-instructor.component.scss'
})
export class DashNavInstructorComponent {
  staticRoutes: StaticRoutes = new StaticRoutes()
}
