<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-nav mr-auto">
      <router-link
        class="nav-item nav-link"
        to="/login"
        :class="{
          disabled: isAuth,
        }"
        :aria-disabled="isAuth">
        Login
      </router-link>
      <router-link
        class="nav-item nav-link"
        to="/">
        Inscription
      </router-link>
      <router-link
        class="nav-item nav-link"
        :to="`/user/${userId}`">
        Profil
      </router-link>
    </div>
    <btn-primary
      v-if="isAuth"
      @click="logout"
      >Se déconnecter</btn-primary
    >
  </nav>
  <router-view></router-view>
</template>

<script setup>
  import { useUserStore } from '@/store/user';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import BtnPrimary from './components/BtnPrimary.vue';

  const userStore = useUserStore();
  const { isAuth, userId } = storeToRefs(userStore);
  const { validateToken, logout } = userStore;

  onMounted(async () => {
    await validateToken();
  });
</script>

<style lang="scss">
  @import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
