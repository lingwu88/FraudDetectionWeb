import axios from 'axios'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'http://m1.oboard.eu.org:5000',
  timeout: 10000
})


export default instance
