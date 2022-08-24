import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  interceptors(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        return config
      },
      (err) => {
        // Do something with request error
        errorHandle(err)

        return Promise.reject(err)
      }
    )

    // Add a response interceptor
    instance.interceptors.response.use(
      (res) => {
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
      },
      (err) => {
        errorHandle(err)
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(err)
      }
    )
  }

  request(options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    },config)
    return this.request(options)
  }

  post(url,data, config) {
    const options = Object.assign({
      method: 'post',
      url: url,
      data:data
    },config)
    return this.request(options)
  }
}

// const instance = axios.create({
//   baseURL: process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro,
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   timeout: 10000
// })

export default HttpRequest
