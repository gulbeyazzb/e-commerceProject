export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const setCartListAction = (cartList) => {
  return { type: SET_CART_LIST, payload: cartList };
};

export const updateQuantityAction = (type, id) => {
  return { type: UPDATE_QUANTITY, payload: type, id };
};

export const setPaymentAction = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddressAction = (address) => {
  return { type: SET_ADDRESS, payload: address };
};

export const addToCartThunkAction = (addedProduct) => (dispatch) => {
  dispatch(setCartListAction(addedProduct));
};

export const updateQuantityThunkAction = (updateType, id) => (dispatch) => {
  dispatch(updateQuantityAction(updateType, id));
};
