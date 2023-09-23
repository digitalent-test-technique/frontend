<template>
  <router-view></router-view>
</template>

<script setup>
  import { useUserStore } from '@/store/user';
  import { onMounted } from 'vue';

  const userStore = useUserStore();
  const { autoLogin, validateToken } = userStore;

  onMounted(async () => {
    await validateToken();
    autoLogin();
  });
</script>

<style lang="scss">
  @import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
