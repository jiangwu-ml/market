import axios from 'axios';
export let xhr = axios.create({
  // baseURL:'http://123.207.32.32:8000',
  baseURL:'http://152.136.185.210:7878/api/m5/'
})

// 处理返回值，只返回数据
xhr.interceptors.response.use(response => {
  return response.data
}, error => {
  return error
})
