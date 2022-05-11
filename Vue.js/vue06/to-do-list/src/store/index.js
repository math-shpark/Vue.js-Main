import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  initTodo() {
    const arr = []
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) != 'loglevel:webpack-dev-server') {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return arr
  }
}

export default new Vuex.Store({
  state: {
    todos: storage.initTodo()
  },
  getters: {
    storedTodoItems(state) {
      return state.todos;
    }
  },
  mutations: {
    addTodoItem(state, newTodoItem) {
      let item = {
        str: newTodoItem,
        done: false
      }
      localStorage.setItem(newTodoItem, JSON.stringify(item))
      state.todos.push(item)
    },
    clearAllItems(state) {
      localStorage.clear()
      state.todos = []
    },
    removeTodo(state, str, index) {
      state.todos.splice(index, 1)
      localStorage.removeItem(str)
    },
    completeTodo(state, modifyTodo, index) {
      state.todos[index].done = !this.todos[index].done
      localStorage.removeItem(modifyTodo.str)
      localStorage.setItem(modifyTodo.str, JSON.stringify(this.todos[index]))
    }
  },
  actions: {

  }
})
