import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {LayoutComponent} from "./views/layout/layout.component";
import {ProductService} from "./shared/services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
