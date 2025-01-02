import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    imports: [HeaderComponent, ProjectCardComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
