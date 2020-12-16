import { Message } from "element-ui";
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
    // console.log('test onResponse', res.data)
    return res.data
    /*if (res.data.code === 1) {
      // 重定向到 login 页
      redirect('/login')
    }*/
  });

  $axios.onError(error => {
    console.log('Making request to ' + error.response.config.url)
    switch (error.response.status) {
      case 401:
        // 没有权限，提示
        Message({
          //  饿了么的消息弹窗组件,类似toast
          showClose: true,
          message: error.message,
          type: "error.data.error.message"
        });
        break;
      case 403:
        // 重定向到 403 页
        redirect('/error/403')
        break;
      case 404:
        // 重定向到 404 页
        redirect('/error/404')
        break;
      case 500:
        // 500报错，提示
        Message({
          //  饿了么的消息弹窗组件,类似toast
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
