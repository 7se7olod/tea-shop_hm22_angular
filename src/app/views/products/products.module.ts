import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProductsModule { }
