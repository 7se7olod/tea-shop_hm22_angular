import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderProduct = new BehaviorSubject<ProductType | null>(null);

  get product(): ProductType | null {
    return this.orderProduct.getValue();
  }

  setProduct(product: ProductType) {
    this.orderProduct?.next(product);
  }
}
