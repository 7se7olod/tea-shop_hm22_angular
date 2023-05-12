import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "./order/order.component";

const routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRoutingModule {}
