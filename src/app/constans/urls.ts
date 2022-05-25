import {environment} from "../../environments/environment";

let {API, API_CARS} = environment
export const urls = {
  users: `${API}/users`,
  posts: `${API}/posts`,
  products: `${API}/products`,
  comments: `${API}/comments`,
  todos: `${API}/todos`,

  users_car: `${API_CARS}/users`,
  auth: `${API_CARS}/auth`,
  cars: `${API_CARS}/cars`,
}
