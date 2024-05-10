import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./shared/login/pages/login-page/login-page.component').then( c => c.LoginPageComponent),
  }
];
