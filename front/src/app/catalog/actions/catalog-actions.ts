
export class CatalogActions {
  static LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
  static LOAD_ALL_CATEGORIES_SUCCESS = 'LOAD_ALL_CATEGORIES_SUCCESS';

  static LOAD_DETAIL_PRODUCT = 'LOAD_DETAIL_PRODUCT';
  static LOAD_DETAIL_PRODUCT_SUCCESS = 'LOAD_DETAIL_PRODUCT_SUCCESS';

  static LOAD_LIST_PRODUCTS = 'LOAD_LIST_PRODUCTS';
  static LOAD_LIST_PRODUCTS_SUCCESS = 'LOAD_LIST_PRODUCTS_SUCCESS';



  getListProducts(id:any) {
    return {
      type: CatalogActions.LOAD_LIST_PRODUCTS,
      payload:id
    };
  }

  getListProductsSuccess(products:any) {
    return {
      type: CatalogActions.LOAD_LIST_PRODUCTS_SUCCESS,
      payload: products
    };
  }

  getDetailProduct(id:any) {
    return {
      type: CatalogActions.LOAD_DETAIL_PRODUCT,
      payload:id
    };
  }

  getDetailProductSuccess(product:any) {

    return {
      type: CatalogActions.LOAD_DETAIL_PRODUCT_SUCCESS,
      payload: product
    };
  }



  getAllCategories(){
    return {
      type: CatalogActions.LOAD_ALL_CATEGORIES
    };
  }

  getAllCategoriesSuccess(product:any) {

    return {
      type: CatalogActions.LOAD_ALL_CATEGORIES_SUCCESS,
      payload: product
    };
  }

}
