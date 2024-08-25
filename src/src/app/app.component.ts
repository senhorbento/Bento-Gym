import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesModule } from './core/services/_services.modules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServicesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bento Page';
}
