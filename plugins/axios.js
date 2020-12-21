import { Message } from "element-ui";
import { logout } from '~/assets/logout'
export default ({ redirect, $axios }) => {
  $axios.onRequest(config => {
    /*const jwt = Cookie.get('token')
    console.log('request', jwt, Cookie.get('token'))
    if (jwt) {
      config.headers['Authorization'] = `Bearer ${jwt}` // 让每个请求携带自定义token 请根据实际情况自行修改
    }*/
    return config
  });

  $axios.onResponse(res => {
    // 返回数据逻辑处理
    return res.data
  });

  $axios.onError(error => {
    console.log('Making request to ' + error.response.config.url)
    switch (error.response.status) {
      case 401:
        // 没有权限，提示
        Message({
          showClose: true,
          message: error.message,
          type: "error.data.error.message"
        });
        // 登出
        logout()
        break;
      case 403:
        // 重定向到 403 页
        redirect('/error/forbidden')
        break;
      case 404:
        // 重定向到 404 页
        redirect('/error/not-found')
        break;
      case 500:
        // 500报错，提示
        Message({
          showClose: true,
          message: error.message,
          type: "error.data.error.message"
        });
        break;
      default:
        break;
    }
  })
};
