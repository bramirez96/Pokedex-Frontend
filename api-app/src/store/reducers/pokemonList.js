import { pokemonList } from "../actions";
const {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  SET_URL
} = pokemonList;
const initialState = {
  isFetching: false,
  pokemon: null,
  error: null,
  url: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POKEMON_SUCCESS:
      const newPokemon = {
        id: action.payload.id,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        abilities: action.payload.abilities,
        sprites: action.payload.sprites,
        game_indices: action.payload.game_indices,
        stats: action.payload.stats,
        types: action.payload.types
      };
      return {
        ...state,
        isFetching: false,
        pokemon: state.pokemon ? [...state.pokemon, newPokemon] : [newPokemon]
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `${action.payload.status}: ${action.payload.message}`
      };
    case SET_URL:
      return {
        ...state,
        url: action.payload
      };
    default:
      return state;
  }
};
