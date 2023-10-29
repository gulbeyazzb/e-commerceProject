import { SET_USER } from "../actions/userAction";

const user = {
  name: "",
  email: "",
  password: "",
  role_id: "3",
};

export function userReducer(state = user, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, customer: payload };

    default:
      return state;
  }
}
