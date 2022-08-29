import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state: {
      sid: '',
      isLogin: false
    }
  },
  getters: {
  },
  mutations: {
    setSid(state, value) {
      state.sid = value
    }
  },
  actions: {
  },
  modules: {
  }
})
