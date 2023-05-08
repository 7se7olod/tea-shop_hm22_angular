import {Component, DoCheck} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements DoCheck {
  public products$ = this.productService.products$;
  public isShowLoader$ = this.productService.isShowLoader$;

  constructor(private productService: ProductService) {
  }

  ngDoCheck() {
    this.productService.getProducts().subscribe();
  }
}
