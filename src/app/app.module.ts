import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationEnd} from "@angular/router";
import {SidebarComponent} from "./layout/layout/layout/sidebar/sidebar.component";
import {NavHeaderComponent} from "./layout/layout/layout/header/nav-header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavHeaderComponent,
    HomeComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              FontAwesomeModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
