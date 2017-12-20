// 1.引入组件
import Button from './button'
import Space from './space'
import Icon from './icon'
import Blank from './blank'

// 2.挂载组件对象
const components = {
  Button,
  Space,
  Icon,
  Blank
}

// 3.注册组件
const install = function(Vue, Option = {}) {
  // 4.已经注册的返回
  if (install.installed) return
  // 5.循环注册组件
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 6.导出库
export default {
  install
}
