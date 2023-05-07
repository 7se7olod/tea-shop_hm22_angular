import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  constructor(private productService: ProductService) {
  }
  public toCatalog(): void {
    this.productService.getProducts().subscribe();
  }
}
