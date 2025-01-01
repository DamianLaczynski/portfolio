import { Component } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';
import { SectionComponent } from '../ui/section/section.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [HeaderComponent, SectionComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

}
