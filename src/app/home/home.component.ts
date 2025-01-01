import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  angry:number = 0;
  avatarUrl:string = "../../portfolio/media/assets/Damian-Laczynski.jpg";
  angryUrl:string = "../../portfolio/media/assets/4T2MshPVSMujloZsFqYos1LYNZmBrCVhVNlN3Mm4noBcfXNBYzXJM2pruHZhEcSi8XnaZq-inIrNJZMr-cxlF7ZQdyc9yrIRnRKR.avif";


  angryIncrement()
  {
    this.angry++;
    if(this.angry > 20)
      {
        this.avatarUrl = this.angryUrl;
      }
  }
}
