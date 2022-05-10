<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAllItems">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['clearAllItems'])
  },
}
</script>

<style>

</style>