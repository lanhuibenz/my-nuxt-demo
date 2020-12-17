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
