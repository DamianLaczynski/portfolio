import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section',
    imports: [],
    templateUrl: './section.component.html',
    styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input({required: true}) title!:string;
  @Input({required: true}) content!:string;
}
