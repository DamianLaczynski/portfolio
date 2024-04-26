import { Component } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';
import { ProjectCardComponent } from '../ui/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
