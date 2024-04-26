import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    /*{ path: 'about', component: AboutComponent},
    { path: 'tech-stack', component: TechStackComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },*/
    { path: '**', redirectTo: '/home' }
];
