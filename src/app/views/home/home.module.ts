import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
  ]
})
export class HomeModule { }
