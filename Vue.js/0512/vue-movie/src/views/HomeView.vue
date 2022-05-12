<template>
  <div class="home">
    <h2>영화 목록</h2>
    <table>
      <tr>
        <td>ID</td>
        <td>제목</td>
        <td>감독</td>
        <td>장르</td>
        <td>상영시간</td>
      </tr>
      <tr v-for="movie in movies" :key="movie.id">
        <td>{{ movie.id }}</td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.genre }}</td>
        <td>{{ movie.runningTime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
};
</script>
