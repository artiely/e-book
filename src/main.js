// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import scroll from 'cube-ui'
// import { Cell, CellGroup, Row, Col, NavBar, Popup, Search, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Field, Picker, Toast } from 'vant'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
// Vue.use(Cell)
// Vue.use(CellGroup)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(NavBar)
// Vue.use(Popup)
// Vue.use(Search)
// Vue.use(Tabbar)
// Vue.use(TabbarItem)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Field)
// Vue.use(Picker)
// Vue.use(Toast)
Vue.use(scroll)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(Api)
Vue.use(Vant)

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
