import { pokemon, header } from "../actions";
const {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  SET_COUNT,
  GET_INFO,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
} = pokemon;
const { UPDATE_SEARCH } = header;
const initialState = {
  list: null,
  filtered: null,
  count: 0,
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
        filtered: action.payload,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case GET_INFO:
      return {
        ...state,
        list: state.list.map((x) =>
          x.name === action.payload.name ? action.payload : x
        ),
      };
    case NEXT_PAGE:
      return {
        ...state,
        page:
          state.page < Math.ceil(state.count / state.limit)
            ? state.page + 1
            : state.page,
      };
    case PREV_PAGE:
      return {
        ...state,
        page: state.page > 1 ? state.page - 1 : state.page,
      };
    case SET_PAGE:
      return {
        ...state,
        page:
          action.payload >= 1
            ? action.payload <= Math.ceil(state.count / state.limit)
              ? action.payload
              : state.page
            : state.page,
      };
    case UPDATE_SEARCH:
      const filtered = state.list.filter((x) =>
        x.name.includes(action.payload)
      );
      return {
        ...state,
        filtered,
        count: filtered.length
      };
    default:
      return state;
  }
};
