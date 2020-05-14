export const SET_BG = "SET_BG";
export const setBG = (name) => (dispatch) => {
  dispatch({ type: SET_BG, payload: name });
};

export const SET_ACCENT = "SET_ACCENT";
export const setAccent = (color) => (dispatch) => {
  dispatch({ type: SET_ACCENT, payload: color });
};

export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const openSettings = () => (dispatch) => {
  dispatch({ type: TOGGLE_SETTINGS });
};
