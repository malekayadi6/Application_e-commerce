
export class CheckoutActions {
  static FETCH_SHOPPING_CART = 'FETCH_SHOPPING_CART';

  static FETCH_SHOPPING_CART_SUCCESS = 'FETCH_SHOPPING_CART_SUCCESS';


  addShoppingCart() {

  }

  fetchShoppingCart() {
    return {type: CheckoutActions.FETCH_SHOPPING_CART};
  }

  fetchShoppingCartSuccess(cart) {
  //  //("tessté Action " +JSON.stringify(cart));
    return {
      type: CheckoutActions.FETCH_SHOPPING_CART_SUCCESS,
      payload: cart
    };
  }
}
