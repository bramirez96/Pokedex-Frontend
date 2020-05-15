import { pokemonList } from "../actions";
const {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  REMOVE_POKEMON,
  SET_URL,
} = pokemonList;
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
      const newPokemon = {
        id: action.payload.id,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        abilities: action.payload.abilities,
        sprites: action.payload.sprites,
        game_indices: action.payload.game_indices,
        stats: action.payload.stats,
        types: action.payload.types,
      };
      return {
        ...state,
        pokemon: state.pokemon ? [...state.pokemon, newPokemon] : [newPokemon],
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
        pokemon: [...state.pokemon.slice(0, action.payload), ...state.pokemon.slice(action.payload + 1, state.pokemon.length)]
      };
    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};
