import axios from 'axios'
const port = require('../../config').port;

const instance = axios.create({
  timeout: 30000, // 设置30s为超时
  credentials: 'include',
  withCredentials: true,
})

// 设置请求拦截器
instance.interceptors.request.use(config => {
  let type = 'data'
  if(config.method === 'get') {
    type = 'params'
  }
  if(process.env.VUE_ENV == 'server'){
    config.url = `http://127.0.0.1:${port}/${config.url}`;
  }
  if(!config[type]) {
    config[type] = {}
  }
  return config
}, () => {
  return Promise.reject({
    message: '当前网络不佳，请稍后再试'
  })
})

// 设置响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, () => {
  return Promise.reject({
    message: '当前网络不佳，请稍后再试'
  })
})
console.log(instance);

export default instance
