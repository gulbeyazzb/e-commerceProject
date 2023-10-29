import { useAxios } from "../../hooks/useAxios";

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
  const [getRoles, roleData, loading, err] = useAxios({
    reqType: "get",
    endpoint: "roles",
  });
  getRoles()
    .then((res) => {
      dispatch({ type: SET_ROLES, payload: res });
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
