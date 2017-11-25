


import {CheckoutState} from "../checkout/reducers/checkout-state";
import {checkoutReducer} from "../checkout/reducers/checkout-reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {CatalogState} from "../catalog/reducers/catalog-state";
import {catalogReducer} from "../catalog/reducers/catalog-reducer";
import {AuthState} from "../auth/reducers/auth.state";
import {authReducer} from "../auth/reducers/auth.reducer";
import {UserState} from "../user/reducers/user.state";
import {UserReducer} from "../user/reducers/user.reducer";

export interface AppState {
  checkout:CheckoutState,
  catalog:CatalogState,
  auth: AuthState;
  user:UserState;


}
export const rootReducer = {
  checkout: checkoutReducer,
  catalog:catalogReducer,
  auth:authReducer,
  user:UserReducer,
}


const combinedReducer: ActionReducer<AppState> = combineReducers(rootReducer);
export function reducer(state: any, action: any)
{ return combinedReducer(state, action); }
