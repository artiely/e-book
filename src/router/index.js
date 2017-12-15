import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/components/Login'
import Sort from '@/views/Sort'
import Detail from '@/views/Detail'
import Love from '@/views/Love'
import Find from '@/views/Find'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
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
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: Index
      },
      {
        path: 'find',
        name: 'Find',
        component: Find
      },
      {
        path: 'love',
        name: 'Love',
        component: Love
      },
      {
        path: 'user',
        name: 'User',
        component: User
      }
    ]
  }
  ]
})
