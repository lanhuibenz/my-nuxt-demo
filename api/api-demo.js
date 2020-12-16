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
