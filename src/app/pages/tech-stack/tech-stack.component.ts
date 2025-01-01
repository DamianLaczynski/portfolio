import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

}
