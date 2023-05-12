import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {RouterModule} from "@angular/router";
import {PopupComponent} from "./layout/popup/popup.component";
import {ProductCardComponent} from "./layout/product-card/product-card.component";

@NgModule({
  declarations: [
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PopupComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
