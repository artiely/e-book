import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import Cookies from 'js-cookie'

import Home from '@/views/Home'
import Login from '@/components/Login'

const Index = () => import('@/views/Index')
const Detail = () => import('@/views/Detail')
const Love = () => import('@/views/Love')
const Find = () => import('@/views/Find')
const User = () => import('@/views/User')
const List = () => import('@/views/List')

Vue.use(Router)
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
Router.prototype.back = function() {
  this.isBack = true
  window.history.go(-1)
}

store.dispatch('getUserInfo')
let __listParams = Cookies.getJSON('__listParams')
store.dispatch('setListParams', __listParams)
const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {requiresAuth: false}
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {requiresAuth: true}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/find',
      meta: {requiresAuth: true},
      children: [{
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {requiresAuth: true}
      },
      {
        path: '/find',
        name: 'Find',
        component: Find,
        meta: {requiresAuth: true}
      },
      {
        path: '/love',
        name: 'Love',
        component: Love,
        meta: {requiresAuth: true}
      },
      {
        path: '/user',
        name: 'User',
        component: User,
        meta: {requiresAuth: true}
      }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let _token = Cookies.getJSON('__userInfo')
    if (_token && _token.id) {
      next({query: {redirect: to.fullPath}})
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
