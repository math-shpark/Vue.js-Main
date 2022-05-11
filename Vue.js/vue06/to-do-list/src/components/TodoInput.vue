<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keypress.enter="addTodo">
    <span class="addContainer" @click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem : ""
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem == ""){
                alert('입력된 값이 없습니다.')
            }else{
                this.$store.commit('addTodoItem', this.newTodoItem)
                this.newTodoItem = "" 
            }
        }
    }
}
</script>

<style>
</style>