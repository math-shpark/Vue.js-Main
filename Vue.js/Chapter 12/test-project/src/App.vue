<template>
  <div id="app">값 : {{ getNum() }}</div>
</template>

<script>
import sum from "../../index.js";

export default {
  name: "App",
  methods: {
    getNum() {
      return sum(1, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
