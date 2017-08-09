import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TextfieldComponent,
  TextfieldHelptextDirective,
  TextfieldLabelDirective,
} from './textfield.component';
import {
  TextfieldBoxComponent,
  TextfieldBottomLineDirective,
} from './textfield-box.component';

const TEXTFIELD_COMPONENTS = [
  TextfieldComponent,
  TextfieldHelptextDirective,
  TextfieldBoxComponent,
  TextfieldBottomLineDirective,
  TextfieldLabelDirective,
];

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [TEXTFIELD_COMPONENTS],
  declarations: [TEXTFIELD_COMPONENTS],
})
export class TextfieldModule { }

export * from './textfield.component';
export * from './textfield-box.component';
