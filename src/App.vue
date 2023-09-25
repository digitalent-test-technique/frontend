<template>
  <base-nav></base-nav>
  <router-view></router-view>
</template>

<script setup>
  import 'bootstrap';

  import { useUserStore } from '@/store/user';
  import { onMounted } from 'vue';
  import BaseNav from './components/BaseNav.vue';

  const userStore = useUserStore();
  const { validateToken, autoLogin } = userStore;

  onMounted(async () => {
    autoLogin();
    await validateToken();
  });
</script>

<style lang="scss">
  @import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
