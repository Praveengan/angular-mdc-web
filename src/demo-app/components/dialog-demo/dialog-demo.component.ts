import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MdcDialogComponent, MdcTextfieldComponent } from '../../../lib/public_api';

@Component({
  selector: 'dialog-demo',
  templateUrl: './dialog-demo.component.html'
})
export class DialogDemoComponent {
  userForm: FormGroup;

  @ViewChild('input') input: MdcTextfieldComponent;
  @ViewChild('dialog') dialog: MdcDialogComponent;
  @ViewChild('dialogscroll') dialogScroll: MdcDialogComponent;
  @ViewChild('dialogalert') dialogAlert: MdcDialogComponent;
  @ViewChild('dialoggmail') dialogGmail: MdcDialogComponent;
  @ViewChild('dialogform') dialogForm: MdcDialogComponent;

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
    // this.userForm.setValue({username: 'test'});
  }

  showDialog() {
    this.dialog.show();
  }

  showDialogScroll() {
    this.dialogScroll.show();
  }

  showDialogAlert() {
    this.dialogAlert.show();
  }

  showDialogGmail() {
    this.dialogGmail.show();
  }

  closeDialogGmail() {
    this.dialogGmail.close();
  }

  showDialogForm() {
    // reset error state
    this.input.updateErrorState(true);
    this.dialogForm.show();
  }

  updateForm() {
    // reset error state
    this.input.updateErrorState(false);
    if (!this.userForm.valid) {
      return;
    }
    this.dialogForm.close();
  }
}
