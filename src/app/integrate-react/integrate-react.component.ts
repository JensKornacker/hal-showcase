import {Component, OnInit} from '@angular/core';
import Select from 'react-select';
import {CommonModule} from "@angular/common";
import {ReactComponentDirective} from "../shared/react-component.directive";
import {ComponentProps} from "react";
import {BcService} from "./bc.service";
import {Subscription} from "rxjs";
import {ListOfTasks} from "@vanillabp/bc-ui";
import {Configuration as OfficialApiConfiguration, OfficialTasklistApi} from "@vanillabp/bc-official-gui-client";

@Component({
             standalone: true,
             selector: 'app-integrate-react',
             imports: [ReactComponentDirective, CommonModule],
             templateUrl: './integrate-react.component.html',
             styleUrls: ['./integrate-react.component.scss']
           })
export class IntegrateReactComponent implements OnInit {

  Select = Select;
  business: any;
  private subscription$: Subscription[] = [];

  selectProps: ComponentProps<Select> = {
    onChange(v: unknown) {
      console.log(v)
    },
    options: [
      {value: 'chocolate', label: 'Chocolate'},
      {value: 'strawberry', label: 'Strawberry'},
      {value: 'vanilla', label: 'Vanilla'}
    ]
  }

  constructor(
    private bcService: BcService
  ) {
  }

  ngOnInit(): void {
    this.getBc();
  }

  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{value: 'changed', label: 'Changed'}]
    }
  }

  getBc() {
    this.subscription$.push(
      this.bcService.getBusinessCockpit().subscribe({
                                                      next: (result) => {
                                                        this.business = result;
                                                      }
                                                    })
    )
  }

  showLoadingIndicator = () => {
  }

  toast() {
  }

  useGuiSse() {
  }

  useTasklistApi() {
  }

  openTask() {
  }

  navigateToWorkflow() {
  }

}
