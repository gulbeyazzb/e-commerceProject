import { toast } from "react-toastify";
import { FETCH_STATES } from "../reducers/productReducer";
import { API, renewAPI } from "../../api/api";

export const SET_USER = "SET_USER";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";

export const fetchUserActionCreator =
  (userFormData) => (dispatch, getState) => {
    if (getState().user.fetchState === FETCH_STATES.NotFetched) {
      dispatch({ type: SET_USER_FETCH_STATE, payload: FETCH_STATES.Fetching });
      API.post("login", userFormData)
        .then((res) => {
          dispatch({ type: SET_USER, payload: res.data });
          console.log("thunk res(signup verileri dönüyor):", res);
          dispatch({
            type: SET_USER_FETCH_STATE,
            payload: FETCH_STATES.Fetched,
          });
          renewAPI(res.data.token);

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

export const getUserVerifyAction = () => (dispatch) => {
  API.get("verify")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
      renewAPI(res.data.token);
    })
    .catch((err) => {
      console.error("verifythunaction error:", err);
      renewAPI();
    });
};
