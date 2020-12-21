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

/**
 * 获取首页信息
 * @param $axios
 * @param params
 * @returns {*}
 */
export function apiListFirstPageContents($axios, params) {
  return $axios.post('/normal-website/home/layouts/list', params)
}

/**
 * 获取用户信息
 * @param $axios
 * @param params
 * @returns {*}
 */
export function apiGetUserInfo($axios, params) {
  return $axios.post('/normal-website/user/info/get', params)
}
