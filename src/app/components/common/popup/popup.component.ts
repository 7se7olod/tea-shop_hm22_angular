import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  constructor(private router: Router) {
  }
  public toCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}
