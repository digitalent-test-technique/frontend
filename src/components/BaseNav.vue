<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      id="navbar"
      class="collapse navbar-collapse">
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
        <router-link
          class="nav-item nav-link"
          :to="`/graphs`">
          Graphes
        </router-link>
      </div>
    </div>
    <div class="logout-btn">
      <btn-primary
        v-if="isAuth"
        @click="logout"
        >Se déconnecter</btn-primary
      >
    </div>
  </nav>
</template>

<script setup>
  import BtnPrimary from '@/components/BtnPrimary.vue';

  import { storeToRefs } from 'pinia';
  import { useUserStore } from '@/store/user';

  const userStore = useUserStore();
  const { isAuth, userId } = storeToRefs(userStore);
  const { logout } = userStore;
</script>

<style lang="scss" scoped>
  .logout-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: inherit;
  }
</style>
