import axios from 'axios'
import router from '@/router'
import Cookies from 'js-cookie'
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '/PT',
      headers: {},
      transformResponse: [(data) => {
        data = JSON.parse(data.toString())
        if (typeof data !== 'object') {
          return {
            code: 1000,
            msg: '请登录'
          }
        } else {
          return data
        }
      }]
    })
    instance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        console.error(`来自请求的错误:${error}`)
        return Promise.reject(error)
      })

    instance.interceptors.response.use(
      response => {
        return response
      },
      error => {
        console.error(`来自响应的的错误:${error}`)
        return Promise.reject(error)
      })

    // 请求处理
    instance(options)
      .then((res) => {
        if (res.code === 1000) {
          Cookies.remove('__userInfo')
          router.replace({
            name: 'login'
          })
        } else {
          if (res.status === 200) {
            resolve(res.data)
          }
        }
        return false
      })
      .catch((error) => {
        console.error(`来自响应结果的错误:${error}`)
        reject(error)
      })
  })
}
