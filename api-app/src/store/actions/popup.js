import axios from "axios";

export const SET_POPUP_START = "SET_POPUP_START";
export const SET_POPUP_SUCCESS = "SET_POPUP_SUCCESS";
export const SET_POPUP_FAILURE = "SET_POPUP_FAILURE";
export const setPopup = (pokemon) => async (dispatch) => {
    dispatch({ type: SET_POPUP_START });
    // Axios call to get abilities
    // or any other info necessary :)
    if (pokemon.abilities[0].effect) {
        dispatch({ type: SET_POPUP_SUCCESS, payload: pokemon });
        return;
    }
    try {
        const req = await Promise.all(
            pokemon.abilities.map((x) => {
                return axios.get(x.ability.url);
            })
        );
        const abilities = req.map((x) => {
            const {
                data: { name, effect_entries },
            } = x;
            return {
                name,
                effect: effect_entries
                    .filter((y) => {
                        return y.language.name === "en";
                    })[0]
                    .short_effect.replace(/[\n]/g, " ")
                    .replace("  ", " "),
            };
        });
        pokemon = { ...pokemon, abilities };
        dispatch({ type: SET_POPUP_SUCCESS, payload: pokemon });
    } catch (e) {
        dispatch({ type: SET_POPUP_FAILURE });
    }
};

export const CLOSE_POPUP = "CLOSE_POPUP";
export const closePopup = () => (dispatch) => {
    dispatch({ type: CLOSE_POPUP });
};
