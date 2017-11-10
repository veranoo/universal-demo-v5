import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: 'app/pages/+home-module/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/pages/+about-module/about.module#AboutModule' }
];
