



import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren:'./home/Home.module#HomeModule'},
  { path: 'catalog', loadChildren:'./catalog/catalog.module#CatalogModule'},
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },


];
