import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, shareReplay, Observable, tap} from 'rxjs';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  private allProducts$ = this.http.get<ProductType[]>('https://testologia.ru/tea').pipe(shareReplay(1));
  public products$ = new BehaviorSubject<ProductType[]>([]);
  public isShowLoader$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) {
  }

  // примерно так я хотел сделать запрос с параметрами, но у меня всегда возвращает пустой массив
  // public getProducts1(productTitle: string): Observable<ProductType[]> {
  //   const params = new HttpParams().set('search', productTitle);
  //   return this.http.get<ProductType[]>('https://testologia.ru/tea', {params: params});
  // }

  // так как не получается сделать get запрос с query параметром search, я реализовал поиск таким способом ↓
  public getProducts(teaTitle?: string): Observable<ProductType[]> {
    this.isShowLoader$.next(true);
     return this.allProducts$
       .pipe(
        tap(products => {
          if (!teaTitle) {
            this.products$.next(products);
            this.isShowLoader$.next(false);
            return;
          }
          this.products$
            .next(products.filter(product => product.title.toLowerCase().includes(teaTitle.toLowerCase())))
          this.isShowLoader$.next(false);
        })
       )
  }
}
