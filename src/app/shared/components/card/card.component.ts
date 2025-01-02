import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
    selector: 'app-card',
    imports: [TagComponent],
    template: `
    <div class="tech-card">
        <div class="icon"><img [src]="imageSrc" /></div>
        <div class="header">
            <div class="title">{{ title }}</div>
            <app-tag [tag]="tag"></app-tag>
        </div>
    </div>
  `,
    styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() tag!: string;
}
