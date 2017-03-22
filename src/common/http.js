/**
 * Created by liaowenyue on 2017/3/7.
 */
import axios from 'axios'
import store from '@/store/store'
import * as types from '@/store/types'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://www.xiaosq.com/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log(store.state)

    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('after for request')

    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)
          router.replace({
            path: '/user/inputPhoneNumber',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  })

export default axios
