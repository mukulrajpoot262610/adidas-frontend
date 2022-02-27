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
export const SendOtp = (data) => api.post('/api/send-otp', data)
export const VerifyOtp = (data) => api.post('/api/verify-otp', data)
export const UpdateDetails = (data) => api.post('/api/update-personal', data)

export default api