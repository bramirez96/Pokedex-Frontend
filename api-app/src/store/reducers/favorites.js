import { favorites } from "../actions";
import { TOGGLE_OPEN } from "../actions/favorites";
const { SET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } = favorites;

//I WANT TO USE LOCAL STORAGE HERE
const initialState = {
  favorites: null,
  isOpen: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ADD_FAVORITE:
      return state.favorites.some((x) => x.id === action.payload.id)
        ? state
        : {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((x) => x.id !== action.payload.id),
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
