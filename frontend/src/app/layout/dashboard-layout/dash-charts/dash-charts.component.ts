import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-charts',
  standalone: true,
  imports: [],
  templateUrl: './dash-charts.component.html',
  styleUrl: './dash-charts.component.scss'
})
export class DashChartsComponent {
  isAdmin: boolean = false;
}
