<template>
  <div>
    <h3>User Info Page</h3>
    <h4>
        {{ $route.params.username }}'s Page
    </h4>
  </div>
</template>

<script>
export default {
  name: "UserView",
};
</script>

<style>
</style>