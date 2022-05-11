<template>
  <div>
    <h3>About Component</h3>
    {{ msg }}
    <h4>App.vue로 메시지 전송</h4>
    <input type="text" name="" id="" v-model="text" />
    <button @click="throwMsg">메시지 전송</button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  props: {
    msg: String,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    throwMsg() {
      this.$emit("throw-msg", this.text);
    },
  },
};
</script>

<style>
</style>