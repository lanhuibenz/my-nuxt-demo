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
  }
}
