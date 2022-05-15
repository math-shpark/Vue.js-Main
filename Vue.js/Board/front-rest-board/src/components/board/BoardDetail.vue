<template>
  <div>
    <h3>글 상세 페이지</h3>
    <div>
      {{ board.title }}
      {{ board.vieCnt}}
      {{ board.writer }}
      {{ board.regDate }}
      {{ board.content }}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "BoardDetail",
  created(){
    const pathName = new URL(document.location).pathname.split("/");
    const id = pathName[pathName.length - 1];
    this.$store.dispatch('getBoard', id);
  },
  computed: {
    ...mapState([
      'board'
    ])
  }
};
</script>

<style>
</style>