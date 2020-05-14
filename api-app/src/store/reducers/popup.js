import { popup } from "../actions/";

const { SET_POPUP_START, SET_POPUP_SUCCESS, SET_POPUP_FAILURE } = popup;
const initialState = {
  poppedOut: false,
  isFetching: false,
  pokemon: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPUP_START:
      return {
        ...state,
        isFetching: true
      };
    case SET_POPUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: action.payload,
        poppedOut: true
      };
    default:
      return state;
  }
};
