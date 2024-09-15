// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    loginButtonName: '登录/注册'
  },
  mutations: {
    setUsername(state, newUsername) {
      console.log('----update store username----', newUsername)
      state.loginButtonName = newUsername
    }
  },
  actions: {
    updateUsername({ commit }, newUsername) {
      commit('setUsername', newUsername)
    }
  }
})
