import { Component, OnInit } from '@angular/core';
import {getShoppingCartState} from "../reducers/selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/root-reducers";
import {environment} from "../../../environments/environment";
import {CheckoutServiceService} from "../../core/services/checkout-service.service";
import {CheckoutActions} from "../actions/checkout-actions";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public title: string = 'Confirmation';
  public message: string = 'You want to delete it ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false

   cart:any;
  constructor(
    private store: Store<AppState>,
    private checkoutService:CheckoutServiceService,
    private checkoutActions:CheckoutActions,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.store.select(getShoppingCartState)
      .subscribe(cart=>{
        ////("select === "+JSON.stringify(cart);
        this.cart=cart;
      })
  }
  getImage(item):string{
    return  environment.API_ENDPOINT + item;
  }


  updateQt(event:any,id){
    //("test event " + id + event.target.value );

   this.checkoutService.updateQt(id,event.target.value)
      .subscribe((res)=>{
        //(res.msg);
        if(!res.erreur){
          this.toastr.success(res.msg, 'success!')


        }else{
          this.toastr.error(res.msg, 'erreur!');

        }
        this.store.dispatch(this.checkoutActions.fetchShoppingCart());


      });

  }

  remove(id){
    this.confirmClicked=true;

    this.checkoutService.removeItem(id)
      .subscribe((res) => {
      //  this.showToastr(item.skuName);

        if(!res.erreur){
          this.toastr.success(res.msg, 'success!')


        }else{
          this.toastr.error(res.msg, 'erreur!');

        }
        this.store.dispatch(this.checkoutActions.fetchShoppingCart());

      })

  }
}
