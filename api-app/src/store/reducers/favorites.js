import { favorites } from "../actions";
const { SET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } = favorites;

//I WANT TO USE LOCAL STORAGE HERE
const initialState = {
  favorites: null,
  isFetching: false
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        isFetching: true,
        favorites: action.payload
      };
    case ADD_FAVORITE:
      return state.favorites.some((x) => x.id === action.payload.id)
        ? state
        : {
            ...state,
            isFetching: false,
            favorites: [...state.favorites, action.payload]
          };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((x) => x.id != action.payload.id)
      };
    default:
      return state;
  }
};
