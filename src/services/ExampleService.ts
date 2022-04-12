import { api } from '../configs/axios'
import { ExampleModel } from '../models/ExampleModel';
import { ResponseHttp } from '../types/ResponseHttp';
import { ServiceBase } from '../types/ServiceBase';

class ExampleService implements ServiceBase<ExampleModel>{
  getById(id: number): Promise<ResponseHttp<ExampleModel>> {
    return api.get(`/${id}`)
  }
  get(): Promise<ResponseHttp<ExampleModel>> {
    return api.get('/test')
  }
  post(model: ExampleModel): Promise<ResponseHttp<ExampleModel>> {
   return api.post('/', model)
  }
  update(model: ExampleModel): Promise<ResponseHttp<ExampleModel>> {
    return api.put(`/${model.id}`, model)
  }
  removeById(id: number): Promise<ResponseHttp<ExampleModel>> {
    return api.delete(`/${id}`)
  }

}

export default new ExampleService();