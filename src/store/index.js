/*
 * @Descripttion:
 * @version:
 * @Author: yangming
 * @Date: 2021-04-28 11:20:16
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 16:16:48
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {},
  modules: {},
})
