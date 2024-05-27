import { Component } from '@angular/core';
import { CFavoritesComponent } from '../../../components/c-favorites/c-favorites.component';

@Component({
  selector: 'app-student-favorites',
  standalone: true,
  imports: [
    CFavoritesComponent
  ],
  templateUrl: './student-favorites.component.html',
  styleUrl: './student-favorites.component.scss'
})
export class StudentFavoritesComponent {

}
