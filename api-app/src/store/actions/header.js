export const SEND_SEARCH = "SEND_SEARCH";
export const sendSearch = (e) => (dispatch) => {
  dispatch({ type: SEND_SEARCH });
};

export const UPDATE_INPUT = "UPDATE_INPUT";
export const handleInput = (e) => (dispatch) => {
  dispatch({ type: UPDATE_INPUT, payload: e.target.value });
};
