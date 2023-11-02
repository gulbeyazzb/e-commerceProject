import { SET_PRODUCT } from "../actions/productAction";
import { SET_ACTIVEPAGE } from "../actions/productAction";
import { ADD_PAGECOUNT } from "../actions/productAction";
import { DELETE_PAGECOUNT } from "../actions/productAction";
import { CHANGE_FETCH_STATE } from "../actions/productAction";
import { ADD_COUNT } from "../actions/productAction";
import { REMOVE_COUNT } from "../actions/productAction";
import { SET_FILTER } from "../actions/productAction";
import { SET_SEARCH } from "../actions/productAction";

export const FETCH_STATES = {
  NotFetched: "NOT_FETCHED",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  FetchFailed: "FETCH_FAILED",
};

const product = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: FETCH_STATES.NotFetched,
  filter: "",
  searchItem: "",
};

export const productReducer = (state = product, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, productList: { ...action.payload } };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case SET_SEARCH:
      return { ...state, searchItem: action.payload };

    case SET_ACTIVEPAGE:
      return { ...state, activePage: action.payload };

    case ADD_PAGECOUNT:
      return { ...state, pageCount: state.pageCount + 1 };

    case DELETE_PAGECOUNT:
      return { ...state, pageCount: state.pageCount - 1 };

    case CHANGE_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    case ADD_COUNT:
      return { ...state, totalProductCount: state.totalProductCount + 1 };

    case REMOVE_COUNT:
      return { ...state, totalProductCount: state.totalProductCount - 1 };
    default:
      return state;
  }
};
