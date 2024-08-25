import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-curiosities',
  standalone: true,
  imports: [MatGridListModule, HttpClientModule],
  templateUrl: './curiosities.component.html',
  styleUrl: './curiosities.component.scss'
})
export class CuriositiesComponent {
  
}
