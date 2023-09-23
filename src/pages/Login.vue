<template>
  <base-alert
    v-if="errorMessage"
    :message="errorMessage"
    type="danger">
  </base-alert>
  <form
    class="container px-3 px-sm-5 py-5 mt-5 col-md-6"
    :class="{ 'was-validated': isSubmitted }"
    novalidate
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
  import BaseAlert from '@/components/BaseAlert.vue';

  const email = ref();
  const password = ref();

  const isSubmitted = ref(false);

  const isLoading = ref(false);

  const errorMessage = ref(null);

  const userStore = useUserStore();
  const { login } = userStore;
  async function handleSubmit() {
    try {
      isLoading.value = true;
      errorMessage.value = null;
      isSubmitted.value = true;
      if (email.value && password.value) {
        const response = await login({
          email: email.value,
          password: password.value,
        });
        if (!response.ok) {
          errorMessage.value = response.message;
        }
      }
    } catch (er) {
      console.log(er);
    } finally {
      isLoading.value = false;
      setTimeout(() => {
        errorMessage.value = null;
      }, 3000);
    }
  }
</script>

<style lang="scss"></style>
