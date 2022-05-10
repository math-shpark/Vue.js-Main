<template>
  <div id="app">
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components : {
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>

</style>