import * as types from "../Actions/types.js"

const initialState = {
    seedCompanies: [],
    strains: [],
    flowers: [],
    companyDetails: {},
    strainDetails: {},
    flowerDetails: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SEED_COMPANIES:
            return {
                ...state,
                seedCompanies: action.payload
            }
        case types.GET_STRAINS:
            return {
                ...state,
                strains: action.payload
            }
        case types.GET_FLOWERS:
            return {
                ...state,
                flowers: action.payload
            }
        case types.GET_COMPANY_DETAILS:
            return {

            }
        case types.GET_STRAIN_DETAILS:
            return {

            }
        case types.GET_FLOWER_DETAILS:
            return {
                
            }
        default:
            return state;
    }
}