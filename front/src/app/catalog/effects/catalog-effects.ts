

import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {CatalogService} from "../../core/catalog.service";
import {CatalogActions} from "../actions/catalog-actions";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';


@Injectable()
export class CatalogEffects {

  constructor(private catalogService: CatalogService,
              private  actions$: Actions,
              private catalogActions: CatalogActions,) {

  }


  @Effect()
  GetDetailProduct: Observable<Action> = this.actions$
    .ofType(CatalogActions.LOAD_DETAIL_PRODUCT)
    .switchMap((action: Action) => this.catalogService.getDetailProduct(action.payload))
    .map(product => this.catalogActions.getDetailProductSuccess(product));


  @Effect()
  GetAllCategories: Observable<Action> = this.actions$
    .ofType(CatalogActions.LOAD_ALL_CATEGORIES)
    .switchMap((action: Action) => this.catalogService.getAllCategories())
    .map(categories => this.catalogActions.getAllCategoriesSuccess(categories));
  @Effect()
  GetListProducts: Observable<Action> = this.actions$
    .ofType(CatalogActions.LOAD_LIST_PRODUCTS)
    .switchMap((action: Action) => this.catalogService.getListProducts(action.payload))
    .map(categories => this.catalogActions.getListProductsSuccess(categories));

}
