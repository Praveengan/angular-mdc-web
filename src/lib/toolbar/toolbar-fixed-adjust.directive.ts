import {
  Directive,
  ElementRef,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[mdc-toolbar-fixed-adjust], mdc-toolbar-fixed-adjust'
})
export class MdcToolbarFixedAdjustDirective {
  @HostBinding('class.mdc-toolbar-fixed-adjust') isHostClass = true;

  constructor(public elementRef: ElementRef) { }
}
