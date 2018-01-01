import * as types from '../mutation-types'
import api from '@/api/api'
import Cookies from 'js-cookie'

// initial state
const state = {
  userInfo: { // 用户信息
  },
  department: [],
  titleList: ['电脑', '病毒', '系统', '软件', '邮件', '网络', '视频会议'],
  category: ['系统版本', '系统介质', '账户相关', '注意事项'],
  category_1: [],
  category_2: [],
  category_3: [],
  checkFontSize: {
    value: 14,
    label: '默认字体'
  },
  listParams: [] // list页面参数
}

// getters
const getters = {

}

// mutations
const mutations = {
  [types.GET_USER_INFO](state, payload) {
    state.userInfo = { ...state.userInfo,
      ...payload
    }
    Cookies.set('__userInfo', { ...state.userInfo,
      ...payload
    })
  },
  [types.SORT_TITLE_LIST](state, payload) {
    state.titleList = payload
  },
  [types.SET_FONT_SIZE](state, payload) {
    state.checkFontSize = payload
  },
  [types.GET_CATEGORY_LIST_1](state, payload) {
    state.category_1 = payload
  },
  [types.GET_CATEGORY_LIST_2](state, payload) {
    state.category_2 = payload
  },
  [types.GET_CATEGORY_LIST_3](state, payload) {
    state.category_3 = payload
  },
  [types.SET_LIST_PARAMS](state, payload) {
    state.listParams = payload
    Cookies.set('__listParams', payload)
  }
}

// actions
const actions = {
  getUserInfo({
    commit
  }, payload) {
    if (payload) {
      commit(types.GET_USER_INFO, payload)
    } else {
      api.GET_USER_INFO().then(res => {
        if (res.code === 0) {
          commit(types.GET_USER_INFO, res.user)
        }
      })
    }
  },
  sortTitleList({
    commit
  }, payload) {
    commit(types.SORT_TITLE_LIST, payload)
  },
  setFontSize({
    commit
  }, payload) {
    commit(types.SET_FONT_SIZE, payload)
  },
  getCategoryList({
    commit
  }) {
    api.GET_CATEGORY_LIST({page: 1, limit: 200, level: 1}).then(res => {
      if (res.code === 0) {
        commit(types.GET_CATEGORY_LIST_1, res.page.list) // 获取公司
      }
    })
    api.GET_CATEGORY_LIST({page: 1, limit: 200, level: 2}).then(res => {
      if (res.code === 0) {
        commit(types.GET_CATEGORY_LIST_2, res.page.list) // 获取公司
      }
    })
    api.GET_CATEGORY_LIST({page: 1, limit: 200, level: 3}).then(res => {
      if (res.code === 0) {
        commit(types.GET_CATEGORY_LIST_3, res.page.list) // 获取公司
      }
    })
  },
  setListParams({commit}, payload) {
    commit(types.SET_LIST_PARAMS, payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
