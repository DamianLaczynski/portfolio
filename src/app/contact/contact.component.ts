import { Component } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = "damianlaczynski.edu@gmail.com";
}
