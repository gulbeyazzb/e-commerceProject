import { toast } from "react-toastify";
import { API } from "../../api/api";

export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const SET_TOTALPRICE = "SET_TOTALPRICE";
export const SET_TOTALQUANTITY = "SET_TOTALQUANTITY";
export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const SELECTED_ADDRESS = "SELECTED_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";

export const setCartListAction = (cartList) => {
  return { type: SET_CART_LIST, payload: cartList };
};

export const setTotalPriceAction = () => {
  return { type: SET_TOTALPRICE };
};

export const updateTotalPriceAction = (checkedState, id) => {
  return { type: UPDATE_TOTAL_AMOUNT, payload: checkedState, id };
};

export const deleteProductFromCartAction = (id) => {
  return { type: DELETE_PRODUCT_FROM_CART, payload: id };
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

export const fetchAddresAction = (addresses) => {
  return { type: FETCH_ADDRESS, payload: addresses };
};

export const setSelectedAddress = (id) => {
  return { type: SELECTED_ADDRESS, payload: id };
};

export const UpdateAddressAction = (id) => {
  return { type: UPDATE_ADDRESS, payload: id };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  API.post("user/address", formData)
    .then((res) => {
      toast.success("Adress başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Adress kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchAddressThunkAction = () => (dispatch) => {
  API.get("user/address")
    .then((res) => dispatch(setAddressAction(res.data)))
    .catch((err) => {
      console.error(err);
      toast.error("Adress çekilemedi bir hata ile karşılaşıldı!");
    });
};

export const updateQuantityThunkAction = (updateType, id) => (dispatch) => {
  dispatch(updateQuantityAction(updateType, id));
};

export const addToCartThunkAction = (addedProduct) => (dispatch) => {
  dispatch(setCartListAction(addedProduct));
};

export const addCreditCardThunkAction = (addedCard) => (dispatch) => {
  API.post("card", addedCard)
    .then((res) => {
      toast.success("Kart başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Kart kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchCreditCardThunkAction = () => (dispatch) => {
  API.get("card")
    .then((res) => {
      dispatch({ type: ADD_CREDIT_CARD, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      toast.error("Cart bilgileri çekilemedi!");
    });
};
