import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from 'rxjs';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  public products$: BehaviorSubject<ProductType[]> = new BehaviorSubject<ProductType[]>([]);

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<ProductType[]>('https://testologia.site/tea')
      .pipe(
        tap(products => {
          this.products$.next(products);
        }))
  }
}
