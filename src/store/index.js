import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {}
  },
  getters: {},
  mutations: {
    setSid(state, value) {
      state.sid = value
    },
    setUserInfo(state, value) {
      state.userInfo = value
    },
    setIsLogin(state, value) {
      state.isLogin = value
    }
  },
  actions: {},
  modules: {}
})
