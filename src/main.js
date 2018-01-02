// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Api from './api'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import './package/style/index.less'
import Ivue from './package'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import Cube from 'cube-ui'
// import VueScroller from 'vue-scroller'
// import VConsole from 'vconsole'
// Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(Ivue)
Vue.use(Cube)
// var vConsole = new VConsole()
// console.log(vConsole)
Vue.use(Vant)
Vue.use(Api)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
