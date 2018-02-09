
const proxyKey = ['/*/klarticle/**/*', '/*/sys/**/*', '/*/klcategory/**/*', '/*/klcategorytree/**/*', '/*/klkeyword/**/*', '/*/company/**/*']
var proxyList = {}
proxyKey.map(v => {
  proxyList[v] = {
    // target: 'http://172.16.7.248:8077', // （这里是代理接口的位置）
    target: 'http://kt.fwone.com', // （这里是代理接口的位置）
    changeOrigin: true // （允许跨域，如果这不写，调用接口接口时会有跨域错误说缺少请求头）
  }
})
console.log(proxyList)
module.exports = {
  proxyList
}
