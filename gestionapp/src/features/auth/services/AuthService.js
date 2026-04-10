import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE.API.URL || "http://localhost:5000/api/auth",
})

// Llama a POST /api/auth/register
export const registerService = (datos) => API.post("/register", datos)

// Llama a POST /api/auth/login
export const loginService = (datos) => API.post("/login", datos)