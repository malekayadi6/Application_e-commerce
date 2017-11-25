import { Map, Record, List, fromJS } from 'immutable';


export interface CheckoutState extends Map<string, any> {
  cartState: any,
}

export const CheckoutStateRecord = Record({
  cartState:fromJS({}),
});
