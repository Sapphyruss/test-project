import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticRoutes } from '../../../core/routes/static.routes';

@Component({
  selector: 'app-banner-partial',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './banner-partial.component.html',
  styleUrl: './banner-partial.component.scss'
})
export class BannerPartialComponent {
  staticRoutes: StaticRoutes = new StaticRoutes();
}
