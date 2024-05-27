import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StaticRoutes } from '../../../../core/routes/static.routes';

@Component({
  selector: 'app-dash-nav-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dash-nav-student.component.html',
  styleUrl: './dash-nav-student.component.scss'
})
export class DashNavStudentComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();
}
