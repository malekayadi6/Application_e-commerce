import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CheckoutActions} from "../actions/checkout-actions";
import {AppState} from "../../reducers/root-reducers";
import {getShoppingCartState} from "../reducers/selectors";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  cart:any;
  constructor(
    private store:Store<AppState>,
    private checkoutActions:CheckoutActions,
  ) { }

  ngOnInit() {
    this.store.select(getShoppingCartState)
      .subscribe(cart=>{
        ////("select === "+JSON.stringify(cart);
        this.cart=cart;
      })

  }

}
