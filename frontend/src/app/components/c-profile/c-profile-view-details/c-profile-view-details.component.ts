import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticRoutes } from '../../../core/routes/static.routes';

@Component({
  selector: 'app-c-profile-view-details',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './c-profile-view-details.component.html',
  styleUrl: './c-profile-view-details.component.scss'
})
export class CProfileViewDetailsComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();
  isInstructor: boolean = true;
}
