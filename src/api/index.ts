import axios from 'axios'
import { Message } from 'element-ui'
const target = require('./baseUrl')
// 创建axios实例
const service = axios.create({
  baseURL: target.baseUrl,
  timeout: 15000
})

// request拦截器
service.interceptors.request.use((config) => {
  // var _token = sessionStorage.getItem('token')
  // if (_token) {
  //   config.headers = Object.assign(config.headers, {
  //     'token': _token,
  //     'source': '0'
  //   })
  // }
  return config
},
(error) => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return response.data
  },
  (error) => {
    Message({
      message: '出错了，请重试！',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
