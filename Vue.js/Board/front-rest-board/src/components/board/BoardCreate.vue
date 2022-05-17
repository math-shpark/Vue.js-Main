<template>
  <div class="container">
    <h3>글 작성</h3>
    <div class="m-4">
      <b-form-group label="제목" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="title"
          trim
          placeholder="제목을 입력하세요."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="글쓴이" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="writer"
          trim
          placeholder="작성자를 입력하세요."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="내용" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="content"
          trim
          placeholder="내용을 입력하세요."
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="outline-success" @click="createBoard"
        >등록하기</b-button
      >
    </div>
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