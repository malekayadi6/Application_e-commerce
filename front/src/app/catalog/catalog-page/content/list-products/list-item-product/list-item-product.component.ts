import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../../../environments/environment";
import {CatalogService} from "../../../../../core/catalog.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../reducers/root-reducers";
import {ToastrService} from "ngx-toastr";
import {CheckoutActions} from "../../../../../checkout/actions/checkout-actions";
import {CatalogActions} from "../../../../actions/catalog-actions";

@Component({
  selector: 'app-list-item-product',
  templateUrl: './list-item-product.component.html',
  styleUrls: ['./list-item-product.component.css']
})
export class ListItemProductComponent implements OnInit {
  @Input() product;
  constructor(
    private cService:CatalogService,
    private store:Store<AppState>,
    private catalogActions:CatalogActions,
    private toastr: ToastrService,
    private checkoutActions:CheckoutActions
  ) { }
  getImage(item):string{
    return  environment.API_ENDPOINT + item;
  }
  ngOnInit() {
    //(JSON.stringify(this.product));
  }

  addToCart(id:any) {
    //("mmmmmmmm product mmmm djoddp +" + id);
    this.cService.addToCart(id, 1).subscribe(res => {
      if (!res.erreur) {
        this.store.dispatch(this.checkoutActions.fetchShoppingCart());
        this.toastr.success(res.msg, 'success!')

        //("???????? no eereur ");
        this.store.dispatch(this.catalogActions.getDetailProduct(id));

      } else {
        this.toastr.error(res.msg, 'erreur!');

      }
    });
  }
}
