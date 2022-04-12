import axios, { AxiosInstance, AxiosResponse } from 'axios'

axios.create
const api: AxiosInstance = axios.create({ baseURL: 'https://api.example.com' })

api.interceptors.response.use((response: AxiosResponse) => {
  return {
    headers: response.headers as unknown,
    status: response.status,
    data: response.data as unknown
  }
})
export { api }