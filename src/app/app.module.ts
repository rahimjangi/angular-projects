import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ClassToggleDirective } from './class-toggle.directive';
import { NgClassDirective } from './ng-class.directive';
import { NgForDirective } from './ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ClassToggleDirective,
    NgClassDirective,
    NgForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
