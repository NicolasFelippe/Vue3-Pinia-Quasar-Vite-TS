export interface ResponseHttp<T> {
  data: T
  headers: object
  status: number
}
