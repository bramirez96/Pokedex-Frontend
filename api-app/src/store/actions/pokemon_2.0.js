import axios from "axios";
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const fetchPokemon = () => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then(({ data: { count } }) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${count}`)
        .then((res) => {
          console.log(res);
          dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const GET_INFO = "GET_INFO";
export const getInfo = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_INFO, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
