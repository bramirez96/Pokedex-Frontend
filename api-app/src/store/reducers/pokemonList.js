import _ from "lodash";

import { pokemonList, favorites } from "../actions";
import { APP_LOAD_SUCCESS } from "../actions/pokemonList";
const {
    FETCH_POKEMON_START,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
    REMOVE_POKEMON,
    SET_URL,
} = pokemonList;
const { ADD_FAVORITE, REMOVE_FAVORITE } = favorites;
const initialState = {
    pokemon: null,
    error: null,
    url: null,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                error: null,
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        height: action.payload.height,
                        weight: action.payload.weight,
                        abilities: action.payload.abilities,
                        sprites: action.payload.sprites,
                        game_indices: action.payload.game_indices,
                        stats: action.payload.stats,
                        types: action.payload.types,
                        isFavorite: false,
                    },
                },
            };
        case APP_LOAD_SUCCESS:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    ...action.payload,
                },
            };
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                error: `${action.payload.message}`,
            };
        case REMOVE_POKEMON:
            return {
                ...state,
                // pokemon: state.pokemon.filter((x) => x.id !== action.payload.id),
                pokemon: { ..._.omit(state.pokemon, [action.payload]) },
            };
        case SET_URL:
            return {
                ...state,
                url: action.payload,
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
        default:
            return state;
    }
};
