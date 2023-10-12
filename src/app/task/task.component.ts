import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormsModule} from "@angular/forms";
import {TaskService} from "./service/task.service";
import {NgIf} from "@angular/common";
import {UserTaskPage} from "@vanillabp/bc-ui";
import {ComponentProps} from "react";
import {OfficialTasklistApi, Configuration as OfficialApiConfiguration} from "@vanillabp/bc-official-gui-client";
import {ReactComponentDirective} from "../shared/react-component.directive";
import {SideLayoutService} from "../shared/side-layout.service";

export interface IRideCharged {
  amount?: number;
}

@Component({
  standalone: true,
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [
    FormsModule,
    NgIf,
    ReactComponentDirective
  ],
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  @Input() taskId: string = "";

  private subscription$: Subscription[] = [];
  userTaskId: string;
  amount: number | undefined;
  private rideCharged: IRideCharged | undefined;
  UserTaskPage = UserTaskPage;
  listOfProps: ComponentProps<typeof UserTaskPage>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private sideLayoutService: SideLayoutService
  ) {
  }

  ngOnDestroy(): void {
    this.subscription$.forEach((s) => {
      s.unsubscribe();
    })
  }

  ngOnInit(): void {
    this.sideLayoutService.showSideBarVar();
    this.userTaskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fillListOfProps();
    console.log(this.userTaskId);
  }

  fillListOfProps() {
    this.listOfProps = {
      userTaskId: this.userTaskId,
      showLoadingIndicator: show => {},
      toast: () => {},
      openTask: () => {},
      navigateToWorkflow: () => {},
      useTasklistApi: () => new OfficialTasklistApi(new OfficialApiConfiguration({basePath: '/api/'})),
      t: (tKey) => tKey
    }
  }

  charge() {
    this.rideCharged = {
      amount: this.amount
    }
    console.log("rideCharged", this.rideCharged);
    this.subscription$.push(
      this.taskService.completeTask(this.userTaskId, this.rideCharged).subscribe({
        next: (result) => {
          console.log('result', result);
          this.router.navigate(['/home'])
        },
        error: err => {
          console.log('error', err);
        }
      })
    )
  }
}
