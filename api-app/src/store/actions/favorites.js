export const SET_FAVORITES = "SET_FAVORITES";

export const setFavorites = (favArray) => (dispatch) => {
  dispatch({ type: SET_FAVORITES, payload: favArray });
};
 
export const ADD_FAVORITE = "ADD_FAVORITE";
export const addFavorite = (pokemon) => (dispatch) => {
  dispatch({ type: ADD_FAVORITE, payload: pokemon });
};

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const removeFavorite = (pokemon) => (dispatch) => {
  dispatch({ type: REMOVE_FAVORITE, payload: pokemon });
};

export const TOGGLE_OPEN = "TOGGLE_OPEN";
export const toggleOpen = () => (dispatch) => {
  dispatch({ type: TOGGLE_OPEN });
};
