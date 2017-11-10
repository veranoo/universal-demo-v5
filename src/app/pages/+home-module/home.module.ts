import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { routing } from './home-route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
