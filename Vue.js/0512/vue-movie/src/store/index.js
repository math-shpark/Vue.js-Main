import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: []
  },
  getters: {
    movies(state){
      return state.videos;
    }
  },
  mutations: {
  },
  actions: {
    movieList({ commit }){
      
    }
  },
  modules: {
  }
})
