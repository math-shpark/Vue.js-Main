import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    board: {}
  },
  getters: {
  },
  mutations: {
    GET_BOARDS(state, payload) {
      state.boards = payload;
    },
    GET_BOARD(state, payload) {
      state.board = payload;
    },
    CREATE_BOARD(state, payload) {
      state.boards.push(payload);
    },
    UPDATE_BOARD(state, payload) {
      state.board = payload;
    }
  },
  actions: {
    getBoards({ commit }, payload) {
      let params = null;
      if (payload) {
        params = payload
      }
      const API_URL = `http://localhost:9999/board/api/board`
      axios({
        url: API_URL,
        method: 'GET',
        params
      }).then((res) => {
        commit('GET_BOARDS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getBoard({ commit }, id) {
      const API_URL = `http://localhost:9999/board/api/board/${id}`

      axios({
        url: API_URL,
        method: 'GET',
      }).then((res) => {
        commit('GET_BOARD', res.data)
      }).catch((err) => {
        console.log(err);
      })
    },
    createBoard({ commit }, board) {
      const API_URL = `http://localhost:9999/board/api/board`

      axios({
        url: API_URL,
        method: 'POST',
        params: board
      }).then(() => {
        commit('CREATE_BOARD', board);
        router.push("/board");
      }).catch((err) => {
        console.log(err);
      })
    },
    updateBoard({ commit }, params) {
      const API_URL = `http://localhost:9999/board/api/board`

      axios({
        url: API_URL,
        method: 'PUT',
        params
      }).then(() => {
        commit('UPDATE_BOARD', params);
        router.push({ name: 'boardDetail', params: { id: params.id } });
      }).catch((err) => {
        console.log(err);
      })
    },
    deleteBoard({ commit }, id) {
      commit
      const API_URL = `http://localhost:9999/board/api/board/${id}`

      axios({
        url: API_URL,
        method: 'DELETE'
      }).then(() => {
        router.push({ name: 'boardList' })
      })
    }
  },
  modules: {
  }
})
