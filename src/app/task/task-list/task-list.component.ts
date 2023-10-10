import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../service/task.service";
import {Subscription} from "rxjs";
import {TaskDto} from "../task-dto";

export interface ITaskRequest {
  state: string;
  assigned?: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  private subscription$: Subscription[] = [];
  private taskRequest: ITaskRequest | undefined
  taskList: TaskDto[] | undefined;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription$.forEach((s) => {
      s.unsubscribe();
    })
  }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList(): void {
    this.taskRequest = {
      assigned: false,
      state: "CREATED"
    }
    this.subscription$.push(
      this.taskService.getTaskList(this.taskRequest).subscribe({
        next: (result) => {
          this.taskList = result;
          console.log(this.taskList);
        },
        error: err => {
          console.log('error', err);
        }
      })
    )
  }

}
