import axios from "axios";
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const SET_COUNT = "SET_COUNT";
export const fetchPokemon = () => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then(({ data: { count } }) => {
      dispatch({ type: SET_COUNT, payload: count });
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

export const NEXT_PAGE = "NEXT_PAGE";
export const nextPage = () => (dispatch) => {
  dispatch({ type: NEXT_PAGE });
};

export const PREV_PAGE = "PREV_PAGE";
export const prevPage = () => (dispatch) => {
  dispatch({ type: PREV_PAGE });
};

export const SET_PAGE = "SET_PAGE";
export const setPage = (num) => (dispatch) => {
  dispatch({ type: SET_PAGE, payload: num });
};
