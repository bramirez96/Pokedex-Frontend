import { header } from "../actions";
const { UPDATE_SEARCH } = header;

const initialState = {
  searchValue: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
