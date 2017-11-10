import { AboutComponent } from './components/about/about.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
