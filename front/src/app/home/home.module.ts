import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {HomeRoutes} from "./home.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(HomeRoutes),

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
