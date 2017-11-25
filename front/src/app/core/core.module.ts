import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogService} from "./catalog.service";
import {HttpModule} from "@angular/http";
import {CheckoutServiceService} from "./services/checkout-service.service";
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers : [CatalogService,CheckoutServiceService,UserService,AuthService]
})
export class CoreModule { }
