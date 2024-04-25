import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ProjectsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: ProjectsComponent },
    { path: 'contact', component: ProjectsComponent },
    { path: '**', redirectTo: '/home' }
];
