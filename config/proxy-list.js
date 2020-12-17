module.exports = {
  '/dormitory': {
    target: 'https://skjy-test.bmskjy.cn',// 测试环境
    changeOrigin: true
    // pathRewrite: {
    // }
  },
  '/api': {
    target: 'http://106.55.243.179:10001', // 开发环境
    // target: 'https://educard2.bmskjy.cn',// 测试环境
    // target: 'http://10.195.244.147:10001',// 继光主机
    changeOrigin: true
    // pathRewrite: {
    // }
  },
  '/normal-website': {
    target: 'https://48b63f36-c7b2-4abb-a4ad-d11afdae99bb.mock.pstmn.io',
    changeOrigin: true,
    pathRewrite: {
      '^/normal-website': '/'//路径的替换规则
      //这里的配置是正则表达式，以/api开头的将会被用用‘/api’替换掉，假如后台文档的接口是 /api/list/xxx
      //前端api接口写：axios.get('/api/list/xxx') ， 被处理之后实际访问的是：http://news.baidu.com/api/list/xxx
    }
  }
}
