import { createSelector } from 'reselect';


import {CheckoutState} from "./checkout-state";
import {AppState} from "../../reducers/root-reducers";

export function getCheckoutState(state: AppState): CheckoutState {
  return state.checkout;
}




export function fetchOrderState(state: CheckoutState) {
  return state.cartState.toJS();
}


// *************************** PUBLIC API's ****************************

export const getShoppingCartState = createSelector(getCheckoutState, fetchOrderState);
