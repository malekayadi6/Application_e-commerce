

import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {CheckoutActions} from "../actions/checkout-actions";
import {Action} from "@ngrx/store";
import {CheckoutServiceService} from "../../core/services/checkout-service.service";
import 'rxjs/add/operator/switchMap';


@Injectable()
export class CheckoutEffects {

  constructor(private checkoutService: CheckoutServiceService,
              private  actions$: Actions,
              private checkoutActions: CheckoutActions,) {

  }

  @Effect()
  FetchCurrentOrder$ = this.actions$
    .ofType(CheckoutActions.FETCH_SHOPPING_CART)
    .switchMap((action: Action) => this.checkoutService.getShopingCart())
    .map(cart => this.checkoutActions.fetchShoppingCartSuccess(cart));

}
