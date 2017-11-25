import {Component, OnInit} from '@angular/core';
import {AppState} from "./reducers/root-reducers";
import {Store} from "@ngrx/store";
import {CheckoutActions} from "./checkout/actions/checkout-actions";
import {ToastrService} from "ngx-toastr";
import {CatalogActions} from "./catalog/actions/catalog-actions";
import {getAuthStatus} from "./auth/reducers/selectors";
import {AuthActions} from "./auth/actions/auth.actions";
import {UserActions} from "./user/actions/user.actions";
import {getUser} from "./user/reducers/selectores";
import {User} from "./core/models/user";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isAuth:any;
  user:User;

  constructor(
    private store:Store<AppState>,
    private checkoutActions:CheckoutActions,
    private catalogActions:CatalogActions,
    private toastr: ToastrService,
    private authActions:AuthActions,
    private userActions:UserActions,
    private translate: TranslateService,
  ){
    translate.setDefaultLang('en');
    translate.use('en');


  }
  ngOnInit(){

    this.store.dispatch(this.checkoutActions.fetchShoppingCart());
    this.store.dispatch(this.catalogActions.getAllCategories());
    let auth=localStorage.getItem("auth");

    if(auth){
      this.store.dispatch(this.authActions.loginSuccess());
      let user=JSON.parse(localStorage.getItem("user"));
       this.store.dispatch(this.userActions.getUserSuccess(user));

    }






  }

}

