import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  { path: 'signin', component: AuthComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
