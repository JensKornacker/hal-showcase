import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hal-showcase';
  collapedSideBar: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

}
