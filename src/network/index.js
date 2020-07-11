import axios from "axios"


const instance = axios.create({

  baseURL: "接口可以加coderwhy老师微信coderwhy002",
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
