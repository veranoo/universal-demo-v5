import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { routing } from './about-route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent]
})
export class AboutModule { }
