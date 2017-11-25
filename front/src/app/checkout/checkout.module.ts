import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListItemComponent } from './shopping-cart/list-item/list-item.component';
import {RouterModule} from "@angular/router";
import {CheckoutRoutes} from "./checkout.routes";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { PaymentComponent } from './payment/payment.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CheckoutRoutes),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),

  ],
  declarations: [ShoppingCartComponent, ListItemComponent, PaymentComponent, PaymentFormComponent, ShowOrderComponent, OrderSummaryComponent]
})
export class CheckoutModule { }
