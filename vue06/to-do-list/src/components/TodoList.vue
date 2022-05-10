<template>
  <ul>
    <li v-for="(todo, index) in this.storedTodoItems" :key=todo.str>
        <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todo.done}"
            @click="toggleComplete({todo, index})"></i>
        <span :class="{textCompleted: todo.done}">{{todo.str}} </span>
        <span class="removeBtn" v-on:click="removeTodo({todo, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

    methods: {
      ...mapMutations(['removeTodo','toggleComplete'] )
    },
    computed : {
      ...mapGetters(['storedTodoItems'])
    }

}
</script>

<style >

</style>