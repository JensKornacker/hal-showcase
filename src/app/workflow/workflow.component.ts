import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkflowService} from "./service/workflow.service";
import {Observable, Subject, Subscription, takeUntil} from "rxjs";
import {Router} from "@angular/router";

export interface RideBookedParameters {
  pickupLocation: object;
  pickupTime: string;
  targetLocation: object;
}

@Component({
             selector: 'app-workflow',
             templateUrl: './workflow.component.html',
             styleUrls: ['./workflow.component.scss']
           })
export class WorkflowComponent implements OnInit, OnDestroy {

  private subscription$: Subscription[] = [];
  private rideId: string;

  rideBookedParams: RideBookedParameters;

  constructor(
    private workflowService: WorkflowService,
    private router: Router
  ) {
  }

  bookRide(): void {
    this.rideBookedParams = {
      "pickupLocation": {
        "longitude": 1.1234,
        "latitude": 4.5354,
        "hint": null
      },
      "pickupTime": "2023-01-01T17:00:00+0100",
      "targetLocation": {
        "longitude": 1.1234,
        "latitude": 4.5354,
        "hint": null
      }
    }
    this.subscription$.push(
      this.workflowService.bookRide(this.rideBookedParams).subscribe({
         next: (value) => {
           this.rideId = value;
           console.log(this.rideId);
           this.router.navigate(['tasks', this.rideId])
         },
         error: err => {
           console.log('error', err);
         }
       })
    )
  }

  ngOnDestroy(): void {
    this.subscription$.forEach((s) => {
      s.unsubscribe();
    });
  }

  ngOnInit(): void {
  }

}
