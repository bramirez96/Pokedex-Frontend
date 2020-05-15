export const SET_POPUP_START = "SET_POPUP_START";
export const SET_POPUP_SUCCESS = "SET_POPUP_SUCCESS";
export const SET_POPUP_FAILURE = "SET_POPUP_FAILURE";

export const setPopup = (pokemon) => (dispatch) => {
  dispatch({ type: SET_POPUP_START });
  // Axios call to
  setTimeout(() => {
    dispatch({ type: SET_POPUP_SUCCESS, payload: pokemon });
  }, 3000);
};
