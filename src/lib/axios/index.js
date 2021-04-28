/*
 * @Descripttion:
 * @version:
 * @Author: yangming
 * @Date: 2021-04-28 18:18:47
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 22:03:45
 */
import axios from 'axios'

let instance = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
})

instance.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem('token')
    // if (token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.authorization = token //请求头加上token
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    //拦截响应，做统一处理
    // if (response.data.code) {
    //   switch (response.data.code) {
    //     case 1002:
    //       store.state.isLogin = false
    //       router.replace({
    //         path: 'login',
    //         query: {
    //           redirect: router.currentRoute.fullPath,
    //         },
    //       })
    //   }
    // }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error) => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  }
)

export default instance
