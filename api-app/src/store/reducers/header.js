import { header } from "../actions";
const { SEND_SEARCH, UPDATE_INPUT } = header;

const initialState = {
  searchValue: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_SEARCH:
      return {
        ...state,
        searchValue: ""
      };
    case UPDATE_INPUT:
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return state;
  }
};
