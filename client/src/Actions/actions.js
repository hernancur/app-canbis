import * as types from "./types.js";
import * as api from "./api.js";

export const getSeedCompanies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSeedCompanies();
        dispatch({
            type: types.GET_SEED_COMPANIES,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}

export const getStrains = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStrains();
        dispatch({
            type: types.GET_STRAINS,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}

export const getFlowers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFlowers();
        dispatch({
            type: types.GET_FLOWERS,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}