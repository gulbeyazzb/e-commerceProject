import axios from "axios";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const setCategoryAction = (category) => {
  return { type: SET_CATEGORY, payload: category };
};

export const changeThemeAction = (theme) => {
  return { type: CHANGE_THEME, payload: theme };
};

export const changeLanguagAction = (language) => {
  return { type: CHANGE_LANGUAGE, payload: language };
};

export const fetchRolesActionCreator = () => (dispatch) => {
  axiosWithAuth()
    .get("roles")
    .then((res) => {
      dispatch({ type: SET_ROLES, payload: res.data.reverse() });
    })
    .catch((err) => {
      console.error(err);
    });
};
