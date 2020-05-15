import { bg, styles } from "../../data";
import { settings } from "../actions";
import { SET_ACCENT } from "../actions/settings";
const { SET_BG, TOGGLE_SETTINGS, SET_SETTINGS } = settings;
const initialState = {
  background: bg.black,
  accent: styles.red,
  setOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BG:
      return {
        ...state,
        background:
          action.payload === "fire"
            ? bg.fire
            : action.payload === "water"
            ? bg.water
            : action.payload === "grass"
            ? bg.grass
            : bg.black,
      };
    case SET_ACCENT:
      return {
        ...state,
        accent:
          action.payload === "red"
            ? styles.red
            : action.payload === "blue"
            ? styles.blue
            : action.payload === "yellow"
            ? styles.yellow
            : "#000",
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
