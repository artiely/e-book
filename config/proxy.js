
const proxyKey = ['/*/klarticle/**/*', '/*/sys/**/*', '/*/klcategory/**/*']
var proxyList = {}
proxyKey.map(v => {
  proxyList[v] = {
    target: 'http://192.168.199.162:8077', // （这里是代理接口的位置）
    changeOrigin: true // （允许跨域，如果这不写，调用接口接口时会有跨域错误说缺少请求头）
  }
})
console.log(proxyList)
module.exports = {
  proxyList
}
