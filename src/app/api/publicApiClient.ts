import type { AxiosError, AxiosRequestConfig } from 'axios'
import axios, { type InternalAxiosRequestConfig } from 'axios'

const BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_DOMAIN

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => Promise.reject(error),
)

client.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //   window.location.href = ROUTES.LOGIN
    // }

    return Promise.reject(error)
  },
)

const get = <T = unknown>(url: string, config?: AxiosRequestConfig) => {
  return client.get<T, T>(url, config)
}

const post = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.post<T, T>(url, data, config)
}

const put = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.put<T, T>(url, data, config)
}

const patch = <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
  return client.patch<T, T>(url, data, config)
}

const _delete = <T = unknown>(url: string, config?: AxiosRequestConfig) => {
  return client.delete<T, T>(url, config)
}

export const publicApiClient = {
  get,
  post,
  put,
  patch,
  delete: _delete,
}
