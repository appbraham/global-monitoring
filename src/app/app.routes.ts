import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./shared/login/pages/login-page/login-page.component').then( c => c.LoginPageComponent),
  },
  {
    path:'register',
    loadComponent: () => import('./shared/register/pages/register-page/register-page.component').then( c => c.RegisterPageComponent),
  },
  {
    path:'dashboard',
    loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then( c => c.DashboardComponent),
  },
];
