import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SectionComponent } from '@shared/components/section/section.component';

@Component({
    selector: 'app-about',
    imports: [HeaderComponent, SectionComponent, CardComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

}
