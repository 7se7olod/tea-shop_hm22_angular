import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  public products$: Observable<ProductType[]> = this.productService.products$;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.productService.getProducts().subscribe();
  }

  ngOnDestroy() {
  }
}
