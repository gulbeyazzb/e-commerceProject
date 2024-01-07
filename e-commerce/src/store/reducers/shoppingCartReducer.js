import { SET_CART_LIST } from "../actions/shoppingCartAction";
import { SET_PAYMENT } from "../actions/shoppingCartAction";
import { SET_ADDRESS } from "../actions/shoppingCartAction";
import { UPDATE_QUANTITY } from "../actions/shoppingCartAction";
import { SET_TOTALPRICE } from "../actions/shoppingCartAction";
import { SET_TOTALQUANTITY } from "../actions/shoppingCartAction";
import { UPDATE_TOTAL_AMOUNT } from "../actions/shoppingCartAction";
import { DELETE_PRODUCT_FROM_CART } from "../actions/shoppingCartAction";
import { SELECTED_ADDRESS } from "../actions/shoppingCartAction";
import { UPDATE_ADDRESS } from "../actions/shoppingCartAction";
import { ADD_CREDIT_CARD } from "../actions/shoppingCartAction";

const shoppingCart = {
  cartList: [],
  payment: {},
  address: [],
  selectedAddress: {},
  totalAmount: 0,
  totalQuantity: 0,
  updateAddress: {},
  creditCard: [],
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, payload],
      };

    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((cartItem) => cartItem.id !== payload),
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

    case UPDATE_TOTAL_AMOUNT:
      console.log(payload);
      return {
        ...state,
        cartList: state.cartList.map((p) =>
          p.id == payload.id
            ? {
                ...p,
                checked: payload.checkedState,
              }
            : p
        ),
      };

    case SET_TOTALPRICE:
      return {
        ...state,
        totalAmount: state.cartList.reduce((cartTotal, cartItem) => {
          const { price, productQuantity } = cartItem;
          const itemTotal = price * productQuantity;
          cartTotal += itemTotal;
          if (cartItem.checked == false) cartTotal -= itemTotal;
          return cartTotal >= 0 ? cartTotal : 0;
        }, 0),
      };

    case SET_TOTALQUANTITY:
      return {
        ...state,
        totalQuantity: state.cartList.reduce((quantity, cartItem) => {
          const { productQuantity } = cartItem;

          quantity += productQuantity;
          return quantity;
        }, 0),
      };

    case SET_PAYMENT:
      return { ...state, payment: payload };

    case SET_ADDRESS:
      return { ...state, address: payload };

    case ADD_CREDIT_CARD:
      return { ...state, creditCard: payload };

    case SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: state.address.filter((a) => a.id === Number(payload)),
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddress: state.address.filter((a) => a.id === Number(payload)),
      };

    default:
      return state;
  }
};
