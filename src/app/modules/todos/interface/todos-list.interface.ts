import {TodoInterfaces} from "./todo.interfaces";

export interface TodosListInterface {
  todos: TodoInterfaces[],
  total: number,
  skip: number,
  limit: number,
}
