import axios from "axios"

// Llamada a axios
const BASE_URL = "https://rickandmortyapi.com/api"

export const getCharacters = (page, name, cancelToken) =>
    axios.get(`${BASE_URL}/character/`, {
        params: { page, name: name || undefined },
        cancelToken,
    })
