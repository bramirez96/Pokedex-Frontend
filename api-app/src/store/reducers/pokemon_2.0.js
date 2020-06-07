import { pokemon } from "../actions";
const {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  GET_INFO,
} = pokemon;
const initialState = {
  list: null,
  isFetching: false,
  page: 1,
  limit: 15,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case GET_INFO:
      return {
        ...state,
        list: state.list.map((x) =>
          x.name === action.payload.name ? action.payload : x
        ),
      };
    default:
      return state;
  }
};
