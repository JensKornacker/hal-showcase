import { Component } from '@angular/core';
import Select from 'react-select';
import {CommonModule} from "@angular/common";
import {ReactComponentDirective} from "../shared/react-component.directive";
import {ComponentProps} from "react";

@Component({
             standalone: true,
  selector: 'app-integrate-react',
             imports: [ReactComponentDirective, CommonModule],
  templateUrl: './integrate-react.component.html',
  styleUrls: ['./integrate-react.component.scss']
})
export class IntegrateReactComponent {

  Select = Select;

  selectProps: ComponentProps<Select> = {
    onChange(v: unknown) {
      console.log(v)
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  }

  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'changed', label: 'Changed' }]
    }
  }

}
