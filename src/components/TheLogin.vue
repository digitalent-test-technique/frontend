<template>
  <form
    class="container p-5 mt-5"
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
    <btn-primary> login </btn-primary>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseInput from './BaseInput.vue';
  import BtnPrimary from './BtnPrimary.vue';

  const email = ref();
  const password = ref();

  function handleSubmit() {
    console.log({
      email: email.value,
      password: password.value,
    });
  }
</script>

<style lang="scss"></style>
