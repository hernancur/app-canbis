import axios from "axios";

const URL = "http://localhost:3001"

export const fetchSeedCompanies = async () => {
    const data = await axios.get(`${URL}/seed-companies`)
    return data
}

export const fetchStrains = async () => {
    const data = await axios.get(`${URL}/strains`)
    return data
}

export const fetchFlowers = async () => {
    const data = await axios.get(`${URL}/flowers`)
    return data
}