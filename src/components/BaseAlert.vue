<template>
  <div class="container position-absolute">
    <div
      :class="`alert alert-${type}`"
      role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
  defineProps({
    type: {
      type: String,
      default: 'success',
    },
    message: String,
  });
</script>

<style lang="scss" scoped>
  .container {
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
