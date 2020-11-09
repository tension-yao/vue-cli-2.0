import Axios from 'axios'

// 自定义创建 axios 实例对象
const axios = Axios.create({
  baseURL: '',
  timeout: 0,
  headers: {}
})

// 在自定义 axios 实例添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 在自定义 axios 实例添加响应拦截器
axios.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

export default axios
