import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../core/catalog.service";
import {Product} from "../../core/models/product";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/root-reducers";
import {CatalogActions} from "../actions/catalog-actions";
import {getProductDetail} from "../reducers/selectores";
import {ToastrService} from "ngx-toastr";
import {CheckoutActions} from "../../checkout/actions/checkout-actions";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   id:any;
   product:any;
   actionsSubscription: Subscription;
   ProductSkuMainImageDefault:boolean;
   ProductSkuMainImage:string;



  constructor(
    private route: ActivatedRoute,
    private cService:CatalogService,
    private store:Store<AppState>,
    private catalogActions:CatalogActions,
    private toastr: ToastrService,
    private checkoutActions:CheckoutActions
  ) { }

  test(){
    this.ProductSkuMainImageDefault=true;
  }
  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
            this.store.dispatch(this.catalogActions.getDetailProduct(this.id));
          });
    this.ProductSkuMainImageDefault=true;


    this.store.select(getProductDetail)
      .subscribe(product=>{
        this.product=product;


      });


  }

  addToCart(id:any){
  this.cService.addToCart(id,1).subscribe(res=>{
    if(!res.erreur){
      this.store.dispatch(this.checkoutActions.fetchShoppingCart());
      this.toastr.success(res.msg, 'success!')

      this.store.dispatch(this.catalogActions.getDetailProduct(this.id));

    }else{
      this.toastr.error(res.msg, 'erreur!');

    }
   });




  }
  handleImageChange(imageUrl) {
    this.ProductSkuMainImageDefault = false;
    this.ProductSkuMainImage = imageUrl;
  }

}
