<template>
  <div>
    <h3>글 작성</h3>
    <div class="m-4"></div>
    <fieldset>
      <legend>등록 내용</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="title" /> <br />
      <label for="writer">글쓴이</label>
      <input type="text" id="writer" v-model="writer" /> <br />
      <label for="content">내용</label>
      <input type="text" id="content" v-model="content" /> <br />
      <button @click="createBoard">등록하기</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "BoardCreate",
  data() {
    return {
      title: "",
      writer: "",
      content: "",
    };
  },
  methods: {
    createBoard() {
      let newBoard = {
        id: 0,
        title: this.title,
        writer: this.writer,
        content: this.content,
      };

      this.$store.dispatch("createBoard", newBoard);
    },
  },
};
</script>

<style>
</style>