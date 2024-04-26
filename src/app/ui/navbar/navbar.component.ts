import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  phone: string = "508465089";
  couter: number = 0;
  number: number = Number(this.phone.at(this.couter));
  increment()
  {
    this.couter++;
    if(this.couter > 9)
      {
        this.couter = 0;
      }
      this.number = Number(this.phone.at(this.couter));
  }
}
