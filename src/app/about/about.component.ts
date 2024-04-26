import { Component } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';
import { SectionComponent } from '../ui/section/section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, SectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
