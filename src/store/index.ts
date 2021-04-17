import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "vue3.0开发H5模板",
    num: 0
  },
  //方法属性
  mutations: {
    getUserName(state, data) {
      state.userName = data
    },
    MUTaddNum(state, params) {
      state.num += params.num;
    }
  },
  //异步属性
  actions: {
    ACTaddnum({ commit }, params) {
      setTimeout(() => {
        console.log('异步提交');
        commit("MUTaddNum", params)
      }, 1000)
    }
  },
  //计算属性
  getters: {
    GETaddnum: function (state) {
      return state.num += 20;
    }
  },
  modules: {
  }
})