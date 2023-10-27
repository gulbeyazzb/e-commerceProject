import { legacy_createStore as createStore } from "redux";
import { userReducer } from "../store/reducers/userReducer";

export const store = createStore(userReducer);
