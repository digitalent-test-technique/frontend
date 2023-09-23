<template>
  <form
    class="container px-3 px-sm-5 py-5 mt-5 col-md-6"
    @submit.prevent="handleSubmit">
    <base-input
      v-model="email"
      label="E-mail"
      type="email"
      placeholder="Saisissez votre adresse e-mail">
    </base-input>
    <base-input
      v-model="password"
      label="Mot de passe"
      type="password"
      placeholder="Saisissez votre mot de passe"></base-input>
    <div class="form-group">
      Vous n'avez pas de compte?
      <router-link
        to="/"
        class="ml-2">
        inscrivez-vous.</router-link
      >
    </div>
    <btn-primary>
      <span
        v-if="isLoading"
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"></span>
      login
    </btn-primary>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseInput from '@/components/BaseInput.vue';
  import BtnPrimary from '@/components/BtnPrimary.vue';
  import { useUserStore } from '@/store/user';

  const email = ref();
  const password = ref();

  const isLoading = ref(false);

  const userStore = useUserStore();
  const { login } = userStore;
  async function handleSubmit() {
    try {
      isLoading.value = true;
      await login({
        email: email.value,
        password: password.value,
      });
    } catch (er) {
      console.log(er);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<style lang="scss"></style>
