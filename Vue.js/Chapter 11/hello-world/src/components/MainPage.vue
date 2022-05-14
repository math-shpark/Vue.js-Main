<template>
  <div>
    <h3>Hello World!</h3>
    <div class="sub" v-for="lang in langs" v-bind:key="lang.name">
      <p>강의 언어 : {{ lang.name }}</p>
      <p>강사명 : {{ lang.teacher }}</p>
      <p>강의 시간 : {{ lang.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      langs: [
        {
          name: "Vue.js",
          teacher: "Hong",
          time: 30,
        },
        {
          name: "JavaScript",
          teacher: "Lee",
          time: 40,
        },
        {
          name: "CSS",
          teacher: "Kim",
          time: 50,
        },
      ],
    };
  },
};
</script>

<style scoped>
.sub {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid;
}
</style>