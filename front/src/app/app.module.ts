import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LayoutModule} from "./layout/layout.module";
import {CoreModule} from "./core/core.module";
import {AuthModule} from "./auth/auth.module";
import {Http} from "@angular/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {routes} from "./app.routes";
import {NgxPaginationModule} from "ngx-pagination";
import {CheckoutEffects} from "./checkout/effects/checkout-effects";
import {EffectsModule} from "@ngrx/effects";
import {CheckoutActions} from "./checkout/actions/checkout-actions";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/root-reducers";
import {CheckoutModule} from "./checkout/checkout.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {CatalogActions} from "./catalog/actions/catalog-actions";
import {CatalogEffects} from "./catalog/effects/catalog-effects";
import {RouterModule} from "@angular/router";
import {AuthActions} from "./auth/actions/auth.actions";
import {UserActions} from "./user/actions/user.actions";
import {UserEffects} from "./user/effects/user.effects";



export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton:true,
      progressBar:true,
    }),
    RouterModule.forRoot(routes),


    LayoutModule,
    CoreModule,
    AuthModule,
    NgxPaginationModule,
    CheckoutModule,

    StoreModule.provideStore(reducer),


    EffectsModule.run(CheckoutEffects),
    EffectsModule.run(CatalogEffects),
    EffectsModule.run(UserEffects),



    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })

  ],
  providers: [CheckoutActions,CatalogActions,AuthActions,UserActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
