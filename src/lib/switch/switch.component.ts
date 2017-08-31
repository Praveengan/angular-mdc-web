import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  Output,
  Provider,
  Renderer2,
  SimpleChange,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { toBoolean } from '../common';
import { MdcRipple } from '../ripple/ripple.directive';

export const MD_SWITCH_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdcSwitchComponent),
  multi: true
};

let nextElId_ = 0;

@Component({
  selector: 'mdc-switch',
  template:
  `
  <input type="checkbox"
    #inputEl
    class="mdc-switch__native-control"
    [id]="inputId"
    [tabindex]="tabindex"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="ariaLabelledby"
    [disabled]="disabled"
    [checked]="checked"
    (change)="handleChange($event)"/>
  <div class="mdc-switch__background">
    <div class="mdc-switch__knob"></div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
  providers: [
    MD_SWITCH_CONTROL_VALUE_ACCESSOR,
    MdcRipple
  ]
})
export class MdcSwitchComponent implements OnChanges {
  @Input() id: string = `mdc-switch-${++nextElId_}`;
  get inputId(): string {
    return `input-${this.id}`;
  }
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() tabindex: number = 0;
  @Input('aria-label') ariaLabel: string;
  @Input('aria-labelledby') ariaLabelledby: string;
  @Input()
  get disableRipple() { return this.ripple.disabled; }
  set disableRipple(value) {
    this.ripple.disabled = toBoolean(value);
  }
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>();
  @HostBinding('class.mdc-switch') isHostClass = true;
  @HostBinding('class.mdc-switch--disabled') get classDisabled(): string {
    return this.disabled ? 'mdc-switch--disabled' : '';
  }
  @ViewChild('inputEl') inputEl: ElementRef;

  onTouched: () => any = () => { };

  private _controlValueAccessorChangeFn: (value: any) => void = (value) => { };

  constructor(
    private _renderer: Renderer2,
    public root: ElementRef,
    public ripple: MdcRipple) {
    this.ripple.init(true);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    let change = changes['disabled'];

    if (change) {
      this.ripple.disabled = toBoolean(change.currentValue);
    }
  }

  handleChange(evt: Event) {
    evt.stopPropagation();
    this._controlValueAccessorChangeFn((<any>evt.target).checked);
    this.change.emit(evt);
  }

  writeValue(value: string) {
    this.checked = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
