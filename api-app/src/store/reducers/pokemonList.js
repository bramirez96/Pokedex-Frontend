import _ from "lodash";

import { pokemonList, favorites } from "../actions";
import { SET_PAGE } from "../actions/pokemonList";
const {
    APP_LOADED,
    APP_LOAD_SUCCESS,
    SET_COUNT,
    NEXT_PAGE,
    PREV_PAGE,
} = pokemonList;
const { ADD_FAVORITE, REMOVE_FAVORITE } = favorites;
const initialState = {
    pokemon: null,
    error: null,
    count: 0,
    page: 0,
    isLoading: false,
    perPage: 12,
    maxPage: 0,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                isLoading: true,
            };
        case APP_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: {
                    ...state.pokemon,
                    ...action.payload,
                },
            };
        case ADD_FAVORITE:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.id]: {
                        ...state.pokemon[action.payload.id],
                        isFavorite: true,
                    },
                },
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.id]: {
                        ...state.pokemon[action.payload.id],
                        isFavorite: false,
                    },
                },
            };
        case SET_COUNT:
            return {
                ...state,
                count: action.payload,
                maxPage: Math.floor(action.payload / state.perPage),
            };
        case NEXT_PAGE:
            return state.page < state.maxPage
                ? {
                      ...state,
                      page: state.page + 1,
                  }
                : state;
        case PREV_PAGE:
            return state.page > 0
                ? {
                      ...state,
                      page: state.page - 1,
                  }
                : state;
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};
