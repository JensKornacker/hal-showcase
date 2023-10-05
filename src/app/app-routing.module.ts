import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TaskComponent} from "./task/task.component";
import {WorkflowComponent} from "./workflow/workflow.component";
import {IntegrateReactComponent} from "./integrate-react/integrate-react.component";
import {TaskListComponent} from "./task/task-list/task-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'workflow-list', component: WorkflowComponent},
  {path: 'integrate-react', component: IntegrateReactComponent},
  {path: 'tasks/:rideId', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
