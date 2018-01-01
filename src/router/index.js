import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import Cookies from 'js-cookie'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/components/Login'
import Sort from '@/views/Sort'
import Detail from '@/views/Detail'
import Love from '@/views/Love'
import Find from '@/views/Find'
import User from '@/views/User'
import Register from '@/views/Register'
import List from '@/views/List'
import Company from '@/views/Company'

import Button from '@/example/Button'
import Input from '@/example/Input'

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
console.log('123', store)
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
      path: '/company',
      name: 'Company',
      component: Company,
      meta: {requiresAuth: true}
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {requiresAuth: true}
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
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
