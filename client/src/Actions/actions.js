import * as types from "./types.js";
import * as api from "./api.js";

export const getSeedCompanies = () => async (dispatch) => {
    try {
        const res = await api.fetchSeedCompanies();
        dispatch({
            type: types.GET_SEED_COMPANIES,
            payload: res.data.companies
        })
    } catch (err) {
        console.log(err);
    }
}

export const getStrains = () => async (dispatch) => {
    try {
        const res = await api.fetchStrains();
        console.log(res.data);
        dispatch({
            type: types.GET_STRAINS,
            payload: res.data.strains
        })
    } catch (err) {
        console.log(err);
    }
}

export const getFlowers = () => async (dispatch) => {
    try {
        const res = await api.fetchFlowers();
        console.log(res.data)
        dispatch({
            type: types.GET_FLOWERS,
            payload: res.data.flowers
        })
    } catch (err) {
        console.log(err);
    }
}