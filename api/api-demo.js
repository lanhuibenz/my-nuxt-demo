import { fetch } from '@/rapper'
/**
 * 获取XX数据列表
 * api-demo
 * @param $axios axios对象
 * @param params 请求参数
 * @returns {*}
 */
export function apiListDormitoryCommunity($axios, params) {
  return $axios.post('/dormitory/community/list', params)
}

export function apiListFirstPageContents($axios, params) {
  return $axios.post('/normal-website/home/layouts/list', params)
}

export function apiTestRap2($axios, params) {
  debugger
// 直接使用 fetch 调用请求函数，能获得请求/返回类型校验/提示
// 在 vscode 中 alt+点击可以查看接口信息
  return fetch['GET/home/layouts/list']({
    // 请求参数
    foo: 'foo'
  },{
    // 第二参为可选配置
    // 请求头 content-type，默认是 'application/json'
    contentType: 'application/json',
  }).then(res => {
    debugger
    // 使用返回值
    const nameList = res.data
  })
}


