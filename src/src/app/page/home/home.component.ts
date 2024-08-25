import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SummaryComponent } from '../../components/summary/summary.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { CuriositiesComponent } from '../../components/curiosities/curiosities.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SummaryComponent, ArticlesComponent, ContactComponent, CuriositiesComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
