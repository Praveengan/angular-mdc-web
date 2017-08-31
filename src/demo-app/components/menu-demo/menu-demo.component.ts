import {
  Component,
  ViewChild
} from '@angular/core';

import { MdcMenuComponent } from '../../../lib/public_api';

@Component({
  selector: 'menu-demo',
  templateUrl: './menu-demo.component.html'
})
export class MenuDemoComponent {
  selectedIndex = -1;
  openingPoint: string = "topLeft";
  @ViewChild('menu') menu: MdcMenuComponent;

  showMenu() {
    this.menu.open();
  }
  handleMenuSelect(event: { index: number, item: HTMLElement }) {
    this.selectedIndex = event.index;
  }
}
