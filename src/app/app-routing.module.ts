import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {OrderComponent} from "./components/pages/order/order.component";

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {}