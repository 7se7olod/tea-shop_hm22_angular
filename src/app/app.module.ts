import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, registerLocaleData} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {LayoutComponent} from "./views/layout/layout.component";
import {ProductService} from "./shared/services/product.service";
import localeRu from "@angular/common/locales/ru";

registerLocaleData(localeRu, "ru");

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
  providers: [ProductService, {provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
