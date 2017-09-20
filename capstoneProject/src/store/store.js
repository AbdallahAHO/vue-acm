import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT_VALUE (state) {
    state.count++
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
