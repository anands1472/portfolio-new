import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/home/home').then((m) => m.Home)
        },
    },
    {
        path: 'about',
        loadComponent: () => {
            return import('./components/about/about.component').then(m => m.AboutComponent)
        }
    },
    {
        path: 'contact',
        loadComponent: () => {
            return import('./components/contact/contact.component').then(m => m.ContactComponent)
        }
    },
    {
        path: 'projects',
        loadComponent: () => {
            return import('./components/projects/projects.component').then(m => m.ProjectsComponent)
        }
    },
];
