import { Routes } from '@angular/router';
import { HomeComponent } from './common/home-component/home-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', loadComponent: () => import('./common/contact-component/contact-component').then(m => m.ContactComponent) },
    { path: 'services', loadComponent: () => import('./common/services-component/services-component').then(m => m.ServicesComponent) },
    { path: 'portfolio', loadComponent: () => import('./common/portfolio-component/portfolio-component').then(m => m.PortfolioComponent) },
    { path: 'team', loadComponent: () => import('./common/team-component/team-component').then(m => m.TeamComponent) },
    { path: 'about', loadComponent: () => import('./common/about-component/about-component').then(m => m.AboutComponent) },
];
