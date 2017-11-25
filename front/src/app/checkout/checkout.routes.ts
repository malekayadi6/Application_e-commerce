

import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {PaymentComponent} from "./payment/payment.component";
import {ShowOrderComponent} from "./show-order/show-order.component";

export const CheckoutRoutes = [
  {path:'cart',component:ShoppingCartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'showorder/:hash',component:ShowOrderComponent}



];
