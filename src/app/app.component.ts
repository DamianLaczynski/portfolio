import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { fadeAnimation } from './shared/animations/route-animations';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [fadeAnimation]
})
export class AppComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData;
    }
}
