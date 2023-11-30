import { SET_CART_LIST } from "../actions/shoppingCartAction";
import { SET_PAYMENT } from "../actions/shoppingCartAction";
import { SET_ADDRESS } from "../actions/shoppingCartAction";

const shoppingCart = {
  cartList: [],
  payment: {},
  address: {},
  count: [],
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, payload],
        count: [...state.count, payload.count],
      };

    case SET_PAYMENT:
      return { ...state, payment: payload };

    case SET_ADDRESS:
      return { ...state, address: payload };

    default:
      return state;
  }
};
