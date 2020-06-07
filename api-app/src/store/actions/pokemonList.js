export const FETCH_POKEMON_START = "FETCH_POKEMON_START_OG";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS_OG";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE_OG";

export const fetchPokemonStart = () => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
};
export const fetchPokemonSuccess = (pokemon) => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_SUCCESS, payload: pokemon });
};
export const fetchPokemonFailure = (errorObj) => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_FAILURE, payload: errorObj });
};

export const SET_URL = "SET_URL";
export const setUrl = (id) => (dispatch) => {
  dispatch({
    type: SET_URL,
    payload: `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`,
  });
};

export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const removePokemon = (index) => (dispatch) => {
  dispatch({ type: REMOVE_POKEMON, payload: index });
};
