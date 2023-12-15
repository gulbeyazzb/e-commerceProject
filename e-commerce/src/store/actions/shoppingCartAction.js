export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const SET_TOTALPRICE = "SET_TOTALPRICE";
export const SET_TOTALQUANTITY = "SET_TOTALQUANTITY";
export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";

export const setCartListAction = (cartList) => {
  return { type: SET_CART_LIST, payload: cartList };
};

export const setTotalPriceAction = () => {
  return { type: SET_TOTALPRICE };
};

export const updateTotalPriceAction = (checkedState, id) => {
  return { type: UPDATE_TOTAL_AMOUNT, payload: checkedState, id };
};

export const setTotalQuantityAction = () => {
  return { type: SET_TOTALQUANTITY };
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
