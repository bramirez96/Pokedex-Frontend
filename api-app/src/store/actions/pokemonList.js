export const APP_LOADED = "APP_LOADED";
export const APP_LOAD_SUCCESS = "APP_LOAD_SUCCESS";
export const appLoadSuccess = (results) => ({
    type: APP_LOAD_SUCCESS,
    payload: results,
});

export const SET_COUNT = "SET_COUNT";
export const setCount = (num) => ({
    type: SET_COUNT,
    payload: num,
});

export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const SET_PAGE = "SET_PAGE";
export const nextPage = () => (dispatch) => {
    dispatch({ type: NEXT_PAGE });
};
export const prevPage = () => (dispatch) => {
    dispatch({ type: PREV_PAGE });
};
export const setPage = (num) => (dispatch) => {
    dispatch({ type: SET_PAGE, payload: num });
};
