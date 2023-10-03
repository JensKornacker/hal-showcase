import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TaskComponent} from "./task/task.component";
import {WorkflowComponent} from "./workflow/workflow.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task-list', component: TaskComponent},
  {path: 'workflow-list', component: WorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
