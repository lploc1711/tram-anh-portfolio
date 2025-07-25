import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'education',
    loadComponent: () => import('./components/education/education.component').then(m => m.EducationComponent)
  },
  {
    path: 'working-experience',
    loadComponent: () => import('./components/research/research.component').then(m => m.ResearchComponent)
  },
  {
    path: 'publications',
    loadComponent: () => import('./components/publications/publications.component').then(m => m.PublicationsComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'awards',
    loadComponent: () => import('./components/awards/awards.component').then(m => m.AwardsComponent)
  },
  {
    path: 'conferences',
    loadComponent: () => import('./components/conferences/conferences.component').then(m => m.ConferencesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '/home' }
];
