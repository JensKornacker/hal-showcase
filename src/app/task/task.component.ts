import {Component} from '@angular/core';
// @ts-ignore
import {BcUserTask} from "@vanillabp/bc-shared";
import {ComponentProps} from "react";
import {ReactComponentDirective} from "../shared/react-component.directive";
import {CommonModule} from "@angular/common";
import {AppModule} from "../app.module";

@Component({
             standalone: true,
             selector: 'app-task',
             imports: [ReactComponentDirective, CommonModule, AppModule],
             templateUrl: './task.component.html',
             styleUrls: ['./task.component.scss']
           })
export class TaskComponent {

  selectProps: ComponentProps<BcUserTask> = {}

}
