import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";

const routers = [
  {path: '', component: CatalogComponent},
  {path: ':id', component: ProductComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}
