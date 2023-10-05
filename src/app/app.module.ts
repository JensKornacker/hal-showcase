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
import { IntegrateReactComponent } from './integrate-react/integrate-react.component';
import {WorkflowComponent} from "./workflow/workflow.component";
import {HttpClientModule} from "@angular/common/http";
import { TaskListComponent } from './task/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    WorkflowComponent,
    TaskListComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              FontAwesomeModule,
              NgOptimizedImage,
              HttpClientModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
