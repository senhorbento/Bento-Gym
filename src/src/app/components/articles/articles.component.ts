import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Constants } from '../../core/constants';



@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  Constants: Constants = new Constants();
}
