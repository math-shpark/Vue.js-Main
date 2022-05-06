<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <!-- 메시지 수신 -->
      <h4>About Component Message</h4>
      <AboutView :msg="msg" @throw-msg="writeMsg" />
      {{ result }}
      <hr>
    </div>
    <div>
      <!-- 동적 바인딩 -->
      <input type="text" name="" id="" v-model="msg" />
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AboutView from "./components/AboutView.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    AboutView,
  },
  data() {
    return {
      msg: "",
      result: "",
    };
  },
  methods: {
    writeMsg(val) {
      this.result = val;
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
