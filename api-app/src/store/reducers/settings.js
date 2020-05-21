import { styles } from "../../data";
import { settings } from "../actions";
import { SET_ACCENT } from "../actions/settings";
const { SET_BG, TOGGLE_SETTINGS, SET_SETTINGS } = settings;
const initialState = {
  background: styles.bg[1].url,
  accent: styles.colors[1].hex,
  setOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BG:
      return {
        ...state,
        background: action.payload,
      };
    case SET_ACCENT:
      return {
        ...state,
        accent: action.payload,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        setOpen: !state.setOpen,
      };
    case SET_SETTINGS:
      return {
        ...state,
        background: action.payload.bg
          ? action.payload.bg
          : initialState.background,
        accent: action.payload.acc ? action.payload.acc : initialState.accent,
      };
    default:
      return state;
  }
};
