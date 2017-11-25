
import { ActionReducer, Action } from '@ngrx/store';


import {CheckoutState,CheckoutStateRecord} from "./checkout-state";
import {CheckoutActions} from "../actions/checkout-actions";

export const initialState: CheckoutState = new CheckoutStateRecord() as CheckoutState;

export const checkoutReducer: ActionReducer<CheckoutState> =
  (state: CheckoutState = initialState, { type, payload }: Action): CheckoutState => {

    switch (type) {
      case CheckoutActions.FETCH_SHOPPING_CART_SUCCESS:
        let _cartState = payload;
        return state.merge({
          cartState: _cartState,
        }) as CheckoutState;
      default:

        return state;
    }
  }

