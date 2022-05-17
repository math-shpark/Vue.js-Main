<template>
  <div>
    <h3>글 상세 페이지</h3>
    <div class="m-4">
      조회수 : <b-badge variant="danger">{{ board.viewCnt }}</b-badge>
      <b-form-group label="제목" label-for="input-1">
        <b-form-input id="input-1" :value="board.title" disabled></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="board.writer"
          disabled
        ></b-form-input>
      </b-form-group>
      <b-form-group label="내용" label-for="input-3">
        <b-form-textarea
          id="input-3"
          :value="board.content"
          disabled
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-primary" @click="moveUpdate">수정</b-button>
      <b-button variant="outline-danger" @click="deleteBoard">삭제</b-button>
    </div>
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