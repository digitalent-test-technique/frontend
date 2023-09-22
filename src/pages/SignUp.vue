<template>
  <form
    class="container p-5 mt-5"
    @submit.prevent="handleSubmit">
    <div class="row">
      <base-input
        v-model="lastName"
        class="col-md-6"
        label="Nom"
        placeholder="Nom">
      </base-input>
      <base-input
        v-model="firstName"
        class="col-md-6"
        label="Prénom"
        placeholder="Prénom">
      </base-input>
    </div>
    <div class="row">
      <base-input
        v-model="email"
        class="col-md-6"
        label="E-mail"
        type="email"
        placeholder="Adresse e-mail">
      </base-input>
      <base-input
        v-model="address"
        class="col-md-6"
        label="Adresse"
        placeholder="Adresse">
      </base-input>
    </div>
    <div class="row">
      <base-input
        v-model="phone"
        class="col-md-6"
        label="Téléphone"
        type="tel"
        placeholder="Téléphone">
      </base-input>
      <base-input
        v-model="password"
        class="col-md-6"
        label="Mot de passe"
        type="password"
        placeholder="Mot de passe"></base-input>
    </div>
    <div class="form-group">
      Avez-vous un compte ?
      <router-link
        to="/login"
        class="ml-2">
        Connectez-vous</router-link
      >
    </div>
    <div class="form-group">
      <btn-primary class="ml-auto"> inscrire </btn-primary>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseInput from '@/components/BaseInput.vue';
  import BtnPrimary from '@/components/BtnPrimary.vue';

  const lastName = ref();
  const firstName = ref();
  const email = ref();
  const address = ref();
  const phone = ref();
  const password = ref();

  function handleSubmit() {
    console.log({
      lastName: lastName.value,
      firstName: firstName.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      password: password.value,
    });
  }
</script>

<style lang="scss"></style>
