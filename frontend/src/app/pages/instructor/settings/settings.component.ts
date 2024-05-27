import { Component } from '@angular/core';
import { CSettingsComponent } from '../../../components/c-settings/c-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
