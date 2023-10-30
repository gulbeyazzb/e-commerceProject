export const SET_PRODUCT = "SET_PRODUCT";
export const SET_ACTIVEPAGE = "SET_ACTIVEPAGE";
export const ADD_PAGECOUNT = "ADD_PAGECOUNT";
export const DELETE_PAGECOUNT = "DELETE_PAGECOUNT";
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE ";
export const ADD_COUNT = "ADD_COUNT ";
export const REMOVE_COUNT = "REMOVE_COUNT ";

export const setProductAction = (product) => {
  return { type: SET_PRODUCT, payload: product };
};

export const setActivePageAction = (page) => {
  return { type: SET_ACTIVEPAGE, payload: page };
};

export const addPageCountAction = () => {
  return { type: ADD_PAGECOUNT };
};

export const deletePageCount = () => {
  return { type: DELETE_PAGECOUNT };
};

export const changeFetchStateAction = (fetchState) => {
  return { type: CHANGE_FETCH_STATE, payload: fetchState };
};

export const addCountAction = () => {
  return { type: ADD_COUNT };
};

export const removeCountAction = () => {
  return { type: REMOVE_COUNT };
};