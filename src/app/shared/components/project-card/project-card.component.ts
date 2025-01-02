import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-card',
    imports: [],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() logoUrl?: string;
  @Input() photoUrl?: string;
  @Input({required:true}) title!: string;
  @Input({required:true}) description!: string;
  @Input() buttonUrl?: string;
  @Input({required:true}) buttonText!: string;

  navigate()
  {
    if(this.buttonUrl)
      {
        window.open(this.buttonUrl, '_blank');
      }
  }
}
