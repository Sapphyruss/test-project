import { Component } from '@angular/core';

// Custom imports below
import { CUpdateInfosComponent } from './c-update-infos/c-update-infos.component';
import { CChangePasswordComponent } from './c-change-password/c-change-password.component';
import { CSocialLinksComponent } from './c-social-links/c-social-links.component';

@Component({
  selector: 'app-c-settings',
  standalone: true,
  imports: [
    CUpdateInfosComponent,
    CChangePasswordComponent,
    CSocialLinksComponent
  ],
  templateUrl: './c-settings.component.html',
  styleUrl: './c-settings.component.scss'
})
export class CSettingsComponent {

}
