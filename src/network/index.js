import axios from "axios"


const instance = axios.create({

  baseURL: "http://152.136.185.210:8000/api/w6",
  timeout: 5000
})
instance.interceptors.response.use(data => {
  return data.data
}, err => {
  console.log(err);
})


export function request(config) {
  return instance(config)
}
