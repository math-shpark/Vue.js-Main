<template>
  <div>
    <h3>글 상세 페이지</h3>
    <div>
      <div>제목 : {{ board.title }}</div>
      <div>조회수 : {{ board.viewCnt }}</div>
      <div>작성자 : {{ board.writer }}</div>
      <div>작성일 : {{ board.regDate }}</div>
      <div>내용 : {{ board.content }}</div>
    </div>
    <button @click="moveUpdate">수정</button>
    <button @click="deleteBoard">삭제</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardDetail",
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const id = pathName[pathName.length - 1];
    this.$store.dispatch("getBoard", id);
  },
  computed: {
    ...mapState(["board"]),
  },
  methods: {
    moveUpdate() {
      this.$router.push({ name: "boardUpdate" });
    },
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.board.id);
    },
  },
};
</script>

<style>
</style>