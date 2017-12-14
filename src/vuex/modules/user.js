import * as types from '../mutation-types'
import api from '@/api/api'

// initial state
const state = {
  userInfo: { // 用户信息
    _id: null
  },
  titleList: ['电脑', '病毒', '系统', '软件', '邮件', '网络', '视频会议'],
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
  },
  [types.SORT_TITLE_LIST](state, payload) {
    state.titleList = payload
  },
  [types.SET_FONT_SIZE](state, payload) {
    state.checkFontSize = payload
  }
}

// actions
const actions = {
  getUserInfo({
    commit
  }, payload) {
    if (payload) {
      commit(types.GET_USER_INFO, payload)
    }
    api.GET_INFO().then(res => {
      if (res.code === 0) {
        commit(types.GET_USER_INFO, res.data)
      }
    })
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
