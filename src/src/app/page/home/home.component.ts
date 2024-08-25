import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { SummaryComponent } from '../../components/summary/summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, SummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
