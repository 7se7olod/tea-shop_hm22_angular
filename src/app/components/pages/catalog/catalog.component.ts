import {Component} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  public products$ = this.productService.products$;
  public isShowLoader$ = this.productService.isShowLoader$;
  constructor(private productService: ProductService) {
  }
}
