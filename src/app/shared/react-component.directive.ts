import {Directive, ElementRef, inject, Input, OnChanges, OnDestroy} from '@angular/core';
import {ComponentProps, createElement, ElementType} from "react";
// @ts-ignore
import {createRoot} from 'react-dom/client';

@Directive({
  selector: '[reactComponent]',
  standalone: true
})
export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {

  @Input() reactComponent: Comp | undefined;
  @Input() props: ComponentProps<Comp> | undefined;
  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {
    // @ts-ignore
    this.root.render(createElement(this.reactComponent, this.props))
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }
  constructor() { }

}
