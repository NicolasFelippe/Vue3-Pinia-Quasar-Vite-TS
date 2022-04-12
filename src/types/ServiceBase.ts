import { ResponseHttp } from './ResponseHttp'

export interface ServiceBase<T>{
  get(): Promise<ResponseHttp<T>>
  getById(id: number): Promise<ResponseHttp<T>>
  post(model: T): Promise<ResponseHttp<T>>
  update(model: T): Promise<ResponseHttp<T>>
  removeById(id: number): Promise<ResponseHttp<T>>
}