export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const updateSearch = (e) => (dispatch) => {
  dispatch({ type: UPDATE_SEARCH, payload: e.target.value });
};
