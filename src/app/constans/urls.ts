import {environment} from "../../environments/environment";

let {API} = environment
export const urls = {
  users:`${API}/users`,
  posts:`${API}/posts`,
  products:`${API}/products`,
}
