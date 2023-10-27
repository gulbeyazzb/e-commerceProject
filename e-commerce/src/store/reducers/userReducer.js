const userInitial = {
  customer: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
  store: {
    name: "",
    email: "",
    password: "",
    role_id: "",
    name: "",
    tax_no: "",
    bank_account: "",
  },
};

export function userReducer(state = userInitial, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER_CUSTOMER":
      return { ...state, customer: payload };

    case "SET_USER_SELLER":
      return { ...state, store: payload };

    default:
      return state;
  }
}
