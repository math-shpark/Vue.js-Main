import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    board: {}
  },
  getters: {
  },
  mutations: {
    GET_BOARDS(state, payload){
      state.boards = payload;
    },
    GET_BOARD(state, payload){
      state.board=payload;
    }
  },
  actions: {
    getBoards({commit}, payload){
      let params = null;
      if (payload){
        params = payload
      }
      const API_URL=`http://localhost:9999/board/api/board`
      axios({
        url: API_URL,
        method: 'GET',
        params
      }).then((res)=>{
        commit('GET_BOARDS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getBoard({commit}, id){
      const API_URL=`http://localhost:9999/board/api/board/${id}`

      axios({
        url: API_URL,
        method: 'GET',
      }).then((res) => {
        commit('GET_BOARD', res.data)
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
