import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom imports
import { StaticRoutes } from '../../../core/routes/static.routes';

@Component({
  selector: 'app-dash-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-header.component.html',
  styleUrl: './dash-header.component.scss',
})
export class DashHeaderComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();
  @Input() userName: string = 'Alain Gouba';
  @Input() userImageUrl: string = 'assets/img/dashbord/team__4.jpg';
  @Input() starRating: number = 0;
  @Input() reviewsCount: number = 0;
  @Input() createCourseLink: string = 'create-course';
  isInstructor: boolean = true;
}
