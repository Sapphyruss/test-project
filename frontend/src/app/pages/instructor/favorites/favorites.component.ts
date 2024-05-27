import { Component } from '@angular/core';

// Custom components imports
import { CFavoritesComponent } from '../../../components/c-favorites/c-favorites.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CFavoritesComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

}
