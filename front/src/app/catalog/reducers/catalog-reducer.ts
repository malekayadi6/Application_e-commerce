
import { ActionReducer, Action } from '@ngrx/store';


import {CatalogState,CatalogStateRecord} from "./catalog-state";
import {CatalogActions} from "../actions/catalog-actions";

export const initialState: CatalogState = new CatalogStateRecord() as CatalogState;

export const catalogReducer: ActionReducer<CatalogState> =
  (state: CatalogState = initialState, { type, payload }: Action): CatalogState => {


    switch (type) {
      case CatalogActions.LOAD_DETAIL_PRODUCT_SUCCESS:
       let  _product = payload;
        return state.merge({
          productState: _product,
        }) as CatalogState;
       case CatalogActions.LOAD_ALL_CATEGORIES_SUCCESS:
       let  _categories = payload;
        return state.merge({
          categoriesState: _categories,
        }) as CatalogState;
       case CatalogActions.LOAD_LIST_PRODUCTS_SUCCESS:
       let  _listProducts = payload;
        return state.merge({
          listProudctsState: _listProducts,
        }) as CatalogState;

      default:

        return state;
    }
  }

