<template>
  <div></div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  onMounted(() => {
    const userID = route.params.userID;
    console.log(userID);
  });
</script>

<style lang="scss"></style>
