import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./views/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'main', loadChildren: () => import ('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'catalog', loadChildren: () => import ('./views/products/products.module').then(m => m.ProductsModule)},
      {path: 'order', loadChildren: () => import ('./views/order/order.module').then(m => m.OrderModule)},
      {path: '**', redirectTo: 'main'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
