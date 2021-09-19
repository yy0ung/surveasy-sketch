import { createStore } from 'vuex'

export default createStore({
  state: {
    login: false,
  },
  mutations: {
    loginToggle(state) {
      state.login = !state.login
    }
  },
  actions: {
  },
  modules: {
  }
})