import { SET_CART_LIST } from "../actions/shoppingCartAction";
import { SET_PAYMENT } from "../actions/shoppingCartAction";
import { SET_ADDRESS } from "../actions/shoppingCartAction";
import { UPDATE_QUANTITY } from "../actions/shoppingCartAction";

const shoppingCart = {
  cartList: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, payload],
      };

    case UPDATE_QUANTITY:
      console.log(payload);
      return {
        ...state,
        cartList: state.cartList.map((p) =>
          p.id == payload.id
            ? {
                ...p,
                productQuantity:
                  payload.updateType == "increment"
                    ? p.productQuantity + 1
                    : p.productQuantity - 1,
              }
            : p
        ),
      };

    case SET_PAYMENT:
      return { ...state, payment: payload };

    case SET_ADDRESS:
      return { ...state, address: payload };

    default:
      return state;
  }
};
