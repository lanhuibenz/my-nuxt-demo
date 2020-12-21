// 项目入口配置
import { overrideFetch, fetch } from '@/rapper/index'

export function apiTestRap2($axios, params) {
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


