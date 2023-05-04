import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable, of, switchMap} from "rxjs";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product$: Observable<ProductType | null> | undefined;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.product$ = this.activatedRoute.params
      .pipe(
        switchMap(({id}) => {
          if (!id) {
            return of(null);
          }
          return this.productService.products$.pipe(
            map(products => products.find(product => product.id.toString() === id) || null),
          )
        }),
      )
  }

  public toOrderPage(product: ProductType) {
    this.orderService.setProduct(product);
    this.router.navigate(['/order']);
  }
}
