export const SET_USER_CUSTOMER = "";
export const SET_USER_SELLER = "";

export const setUserCustomerAction = (customer) => ({
  type: "SET_USER_CUSTOMER",
  payload: customer,
});

export const setUserSellerAction = (seller) => ({
  type: "SET_USER_SELLER",
  payload: seller,
});
