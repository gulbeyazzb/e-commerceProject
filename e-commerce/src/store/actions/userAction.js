import { toast } from "react-toastify";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { FETCH_STATES } from "../reducers/productReducer";

export const SET_USER = "SET_USER";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";

export const fetchUserActionCreator =
  (userFormData) => (dispatch, getState) => {
    if (getState().user.fetchState === FETCH_STATES.NotFetched) {
      dispatch({ type: SET_USER_FETCH_STATE, payload: FETCH_STATES.Fetching });
      axiosWithAuth()
        .post("login", userFormData)
        .then((res) => {
          dispatch({ type: SET_USER, payload: res.data });
          dispatch({
            type: SET_USER_FETCH_STATE,
            payload: FETCH_STATES.Fetched,
          });
          console.log("action:", res);
          toast.success(res.data.message);
        })
        .catch((err) => {
          dispatch({
            type: SET_USER_FETCH_STATE,
            payload: FETCH_STATES.FetchFailed,
          });
          console.error(err);
          toast.warning(err.response.data.message);
        });
    }
  };
