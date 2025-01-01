import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  template: `<div class="tag">{{ tag }}</div>`,
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input() tag!: string;
}
