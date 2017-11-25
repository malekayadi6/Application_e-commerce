import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/root-reducers";
import {getShoppingCartState} from "../../checkout/reducers/selectors";
import {getAllCategories} from "../../catalog/reducers/selectores";
import {environment} from "../../../environments/environment";
import {getUser} from "../../user/reducers/selectores";
import {getAuthStatus} from "../../auth/reducers/selectors";
import {AuthActions} from "../../auth/actions/auth.actions";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart: any;
  categories:any[];
  user:any;
  isAuth:boolean;
  currentLangFr: boolean;
  currentLang: string;

  constructor(
    private store: Store<AppState>,
    private authActions:AuthActions,
    private toastr: ToastrService,
    private router:Router,
    private authService:AuthService,
    private translate: TranslateService,
  ) { }
  getImage(item):string{
    return  environment.API_ENDPOINT + item;
  }

  asma(user){

    if(user.type == 1){
      this.router.navigate(['/user/admin']);


    }else if(this.user.type == 2){
      this.router.navigate(['/user/client']);


    }else {
      this.router.navigate(['/user/client']);

    }

  }

  logout(){

    //("clicl logout");
    this.authService.logout().subscribe(res=>{
      if(!res.error){
        this.store.dispatch(this.authActions.logoutSuccess());
        localStorage.clear();
        this.toastr.info( res.msg, 'info !');
        this.router.navigate(['/auth']);
      }

    });




  }




  ngOnInit() {


    this.currentLang = this.translate.currentLang;
    if(this.currentLang == 'fr'){
      this.currentLangFr= true;
    }
    if(this.currentLang == 'en'){
      this.currentLangFr= false;
    }



     this.store.select(getShoppingCartState)
      .subscribe(cart=>{
        this.cart=cart;
      });

      this.store.select(getAllCategories)
      .subscribe(categories=>{
        this.categories=categories;
      });

    this.store.select(getAuthStatus)
      .subscribe(isAuth=>{
        this.isAuth=isAuth
        if(isAuth){
          this.store.select(getUser)
            .subscribe(user=> {
              this.user = user;
            });


        }

      });


  }


  changeLanguage(lang){
    this.translate.use(lang);
    /* this.currentLang = this.translate.currentLang;*/
    this.currentLang = lang;


    if(this.currentLang == 'fr'){
      this.currentLangFr= true;
    }
    if(this.currentLang == 'en'){
      this.currentLangFr= false;
    }

  }
}
