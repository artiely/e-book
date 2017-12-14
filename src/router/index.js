import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/components/Login'
import Sort from '@/views/Sort'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        }
      ]
    }
  ]
})
