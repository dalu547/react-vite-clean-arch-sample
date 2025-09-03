import axios from 'axios'
import { API_BASE_URL } from './env'

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  // Attach token if you have one
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (r) => r,
  async (error) => {
    // Example: token refresh flow placeholder
    if (error.response?.status === 401) {
      // try refresh here if you implement it
    }
    return Promise.reject(error)
  }
)
