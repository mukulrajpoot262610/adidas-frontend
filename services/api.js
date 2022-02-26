import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }

})

// LIST
export const getAllProducts = () => api.get('/api/products')

export default api