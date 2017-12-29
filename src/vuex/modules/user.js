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
  checkFontSize: {
    value: 14,
    label: '默认字体'
  }
}

// getters
const getters = {

}

// mutations
const mutations = {
  [types.GET_USER_INFO](state, payload) {
    console.log('this is payload', payload)
    console.log('this is state', state)
    state.userInfo = { ...state.userInfo,
      ...payload
    }
    Cookies.set('userInfo', { ...state.userInfo,
      ...payload
    })
  },
  [types.SORT_TITLE_LIST](state, payload) {
    state.titleList = payload
  },
  [types.SET_FONT_SIZE](state, payload) {
    state.checkFontSize = payload
  },
  [types.GET_CATEGORY_LIST](state, payload) {
    state.department = payload
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
  }, payload) {
    commit(types.GET_CATEGORY_LIST, payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
