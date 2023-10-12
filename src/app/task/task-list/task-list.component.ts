import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TaskDto} from "../task-dto";
import {ReactComponentDirective} from "../../shared/react-component.directive";
import {CommonModule} from "@angular/common";
import {ListOfTasks, OpenTaskFunction} from "@vanillabp/bc-ui";
import {
  Configuration as OfficialApiConfiguration,
  OfficialTasklistApi,
  UserTask
} from "@vanillabp/bc-official-gui-client";
import {ComponentProps} from "react";
import {Router} from "@angular/router";

export interface ITaskRequest {
  state: string;
  assigned?: boolean;
}

interface KnownWindowsOpened {
  [key: string]: Window;
}

const windowsOpened: KnownWindowsOpened = {};

const translations = {
  "title.long": 'Aufgaben',
  "title.short": 'Aufgaben',
  "total": "Anzahl:",
  "no": "Nr.",
  "name": "Aufgabe",
  "module-unknown": "Unbekanntes Modul",
  "retry-loading-module-hint": "Leider ist derzeit kein Zugriff auf die Aufgabe möglich!",
  "retry-loading-module-": "Laden nochmals probieren...",
  "typeofitem_unsupported": "Typfehler"
}

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [ReactComponentDirective, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  private subscription$: Subscription[] = [];
  private taskRequest: ITaskRequest | undefined
  taskList: TaskDto[] | undefined;
  ListOfTasks = ListOfTasks;

  listProps: ComponentProps<typeof ListOfTasks> = {
    showLoadingIndicator: (show) => {
    },
    toast: (toast) => {
    },
    openTask: (userTask) => {
      this.openTask(userTask)
    },
    navigateToWorkflow: (userTask) => {
    },
    t: (tKey) => translations[tKey],
    currentLanguage: "de",
    useTasklistApi: () => new OfficialTasklistApi(new OfficialApiConfiguration({basePath: '/api/'})),
    useGuiSse: (onMessage, messageName) => undefined
  }

  constructor(
    // private taskService: TaskService
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.subscription$.forEach((s) => {
      s.unsubscribe();
    })
  }

  ngOnInit(): void {
    // this.getTaskList();
  }

  openTask(userTask: UserTask) {
    console.log("OPEN TASK", userTask);
    // this.router.navigate(['tasks', userTask.id])

    // const openTask: OpenTaskFunction = (
    //   userTask: UserTask,
    // ) => {
    let previousWindow: Window | undefined = windowsOpened[userTask.id];
    if (previousWindow !== undefined) {
      if (!previousWindow.closed) {
        previousWindow.focus();
        return;
      }
      delete windowsOpened[userTask.id];
      previousWindow = undefined;
    }

    const targetWindowName = `usertask-app-${userTask.id}`;
    const targetUrl = `/tasks/${userTask.id}`;
    const targetWindow = window.open(targetUrl, targetWindowName);
    if (targetWindow) {
      windowsOpened[userTask.id] = targetWindow;
      targetWindow.focus();
    }
  };

  // getTaskList(): void {
  //   this.taskRequest = {
  //     assigned: false,
  //     state: "CREATED"
  //   }
  //   this.subscription$.push(
  //     this.taskService.getTaskList(this.taskRequest).subscribe({
  //       next: (result) => {
  //         this.taskList = result;
  //         console.log(this.taskList);
  //       },
  //       error: err => {
  //         console.log('error', err);
  //       }
  //     })
  //   )
  // }

}
