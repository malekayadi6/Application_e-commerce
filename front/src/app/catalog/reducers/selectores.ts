import { createSelector } from 'reselect';


// Base Cart State function
import {AppState} from "../../reducers/root-reducers";
import {CatalogState} from "./catalog-state";

export function getCatalogState(state: AppState): CatalogState {
  return state.catalog;
}



// products detail
export function getProductState(state: CatalogState) {
  return state.productState.toJS();
}
// categories
export function getCategoriesState(state: CatalogState) {
  return state.categoriesState.toJS();
}

//liste of products

export function getListProductsState(state: CatalogState) {
  return state.listProudctsState.toJS();
}


// *************************** PUBLIC API's ****************************

export const getProductDetail = createSelector(getCatalogState, getProductState);
export const getAllCategories = createSelector(getCatalogState, getCategoriesState);
export const getListProducts = createSelector(getCatalogState, getListProductsState);
