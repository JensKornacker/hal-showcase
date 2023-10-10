import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormsModule} from "@angular/forms";
import {TaskService} from "./service/task.service";

export interface IRideCharged {
  amount?: number;
}

@Component({
             standalone: true,
             selector: 'app-task',
             templateUrl: './task.component.html',
             imports: [
               FormsModule
             ],
             styleUrls: ['./task.component.scss']
           })
export class TaskComponent implements OnInit, OnDestroy {

  private subscription$: Subscription[] = [];
  rideId: string | null | undefined;
  amount: number | undefined;
  private rideCharged: IRideCharged | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.subscription$.forEach((s) => {
      s.unsubscribe();
    })
  }

  ngOnInit(): void {
    this.rideId = this.activatedRoute.snapshot.paramMap.get('rideId');
  }

  charge() {
    this.rideCharged = {
      amount: this.amount
    }
    console.log("rideCharged", this.rideCharged);
    this.subscription$.push(
      this.taskService.completeTask(this.rideId, this.rideCharged).subscribe({
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
