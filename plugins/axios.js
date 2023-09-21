import { Message } from 'element-ui'
// import Cookies from 'js-cookie'

export default function ({ store, redirect, app, route }) {
  const { $axios } = app
  // 后端接口地址
  // $axios.defaults.baseURL = 'http://127.0.0.1:19090/api/'

  // Request拦截器：设置Token
  $axios.onRequest((config) => {
    // 往请求头添加东西
  })
  // Error拦截器：出现错误的时候被调用，根据状态码做对应判断并显示全局Message
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code !== 1) {
      Message.error(error.msg || '请求错误')
    }
    // switch (code) {
    //   case 404:
    //     Message.error('请求地址错误')
    //     break
    //   default:
    //     break
    // }
  })
  // Response拦截器：对正常返回的数据进行处理
  $axios.onResponse((response) => {
    if (response?.data?.code !== 1) {
      Message.error(response?.data?.msg || '请求错误')
    }
    return response.data
  })
}
