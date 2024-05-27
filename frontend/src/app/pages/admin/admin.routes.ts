import { Routes } from '@angular/router';

// Custom elements
import { DashboardLayoutComponent } from '../../layout/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ADMIN_ROUTES: Routes = [
  { path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

