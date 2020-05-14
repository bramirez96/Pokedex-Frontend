import { bg, styles } from "../../data";
import { settings } from "../actions";
import { SET_ACCENT } from "../actions/settings";
const { SET_BG, TOGGLE_SETTINGS } = settings;
const initialState = {
  background: bg.fire,
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
    default:
      return state;
  }
};
