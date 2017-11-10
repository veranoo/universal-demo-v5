import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './@init/app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { routes } from './route';
import { HomeModule } from '../pages/+home-module/home.module';
import { AboutModule } from '../pages/+about-module/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    AboutModule,
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules}),
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
