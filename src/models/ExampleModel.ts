import { BaseEntity } from "./BaseEntity";

export interface ExampleModel extends BaseEntity{
  name: string
  counter: number
}