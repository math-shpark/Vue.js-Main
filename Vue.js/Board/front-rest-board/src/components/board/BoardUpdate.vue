<template>
  <div>
    <h3>글 수정 페이지</h3>
    <fieldset>
      <legend>등록 내용 수정</legend>
      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.title" /> <br />
      <label for="writer">글쓴이</label>
      <input type="text" id="writer" v-model="board.writer" /> <br />
      <label for="content">내용</label>
      <input type="text" id="content" v-model="board.content" /> <br />
      <button @click="updateBoard">수정하기</button>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardUpdate",
  computed: {
    ...mapState(["board"]),
  },
  methods: {
    updateBoard() {
      let updateBoard = {
        id: this.board.id,
        title: this.board.title,
        write: this.board.writer,
        content: this.board.content,
      };

      this.$store.dispatch("updateBoard", updateBoard);
    },
  },
};
</script>

<style>
</style>