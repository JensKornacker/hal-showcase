import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationEnd} from "@angular/router";
import {SidebarComponent} from "./layout/layout/layout/sidebar/sidebar.component";
import {HeaderComponent} from "./layout/layout/layout/header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              FontAwesomeModule,
              NgOptimizedImage
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
