import type { AxiosError } from 'axios'
import axios, { type InternalAxiosRequestConfig } from 'axios'

const BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_DOMAIN

export const publicApiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

publicApiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => Promise.reject(error),
)

publicApiClient.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //   window.location.href = ROUTES.LOGIN
    // }

    return Promise.reject(error)
  },
)
