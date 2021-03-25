import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "vue3.0开发H5模板"
  },
  mutations: {
    getUserName(state,data) {
      state.userName = data
    }
  },
  actions: {
  },
  modules: {
  }
})