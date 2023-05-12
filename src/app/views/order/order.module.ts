import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order/order.component";
import {RouterModule} from "@angular/router";
import {OrderRoutingModule} from "./order-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
