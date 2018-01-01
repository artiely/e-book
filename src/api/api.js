/**
 * Created by Artiely on 2017/7/20.
 */
import fetch from './fetch'

/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
const LOGIN = params => {
  return fetch({
    url: '/sys/login',
    method: 'post',
    data: params
  })
}

/**
 * 获取用户的信息
 */
const GET_USER_INFO = params => {
  return fetch({
    url: '/sys/user/info',
    method: 'get',
    params: params
  })
}

/**
 * 注册
 * @param {String} username
 * @param {String} password
 * @param {String} code
 */
const REGISTER = params => {
  return fetch({
    url: '/api/user/register',
    method: 'post',
    data: params
  })
}

/**
 * 获取文章列表
 * @param {String,Number} page
 * @param {String,Number} limit
 * @param {String,Number} category_id1
 * @param {String,Number} category_id2
 * @param {String,Number} category_id3
 */
const GET_ARTICLE_LIST = params => {
  return fetch({
    url: '/klarticle/list',
    method: 'get',
    params: params
  })
}

/**
 * 获取类别列表
 * @param {String,Number} page
 * @param {String,Number} limit
 * @param {String,Number} level
 */
const GET_CATEGORY_LIST = params => {
  return fetch({
    url: '/klcategory/list',
    method: 'get',
    params: params
  })
}

const apiList = {
  LOGIN,
  REGISTER,
  GET_ARTICLE_LIST,
  GET_USER_INFO,
  GET_CATEGORY_LIST
}

export default apiList
