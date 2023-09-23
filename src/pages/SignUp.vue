<template>
  <base-alert
    v-if="errorMessage"
    :message="errorMessage"
    type="danger">
  </base-alert>
  <form
    class="container p-5 mt-5 needs-validation"
    :class="{ 'was-validated': isSubmitted }"
    novalidate
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
    <div
      v-if="!isAuth"
      class="form-group">
      Avez-vous un compte ?
      <router-link
        to="/login"
        class="ml-2">
        Connectez-vous</router-link
      >
    </div>
    <div class="form-group">
      <btn-primary class="ml-auto">
        <span
          v-if="isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"></span>
        inscrire
      </btn-primary>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import BaseInput from '@/components/BaseInput.vue';
  import BtnPrimary from '@/components/BtnPrimary.vue';
  import { useUserStore } from '@/store/user';
  import BaseAlert from '@/components/BaseAlert.vue';

  const isSubmitted = ref(false);

  const lastName = ref();
  const firstName = ref();
  const email = ref();
  const address = ref();
  const phone = ref();
  const password = ref();

  const isLoading = ref(false);

  const errorMessage = ref(null);

  const userStore = useUserStore();
  const { isAuth } = storeToRefs(userStore);
  const { signUp } = userStore;

  async function handleSubmit() {
    try {
      isLoading.value = true;
      errorMessage.value = null;
      isSubmitted.value = true;
      const response = await signUp({
        lastName: lastName.value,
        firstName: firstName.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        password: password.value,
      });
      if (!response.ok) {
        errorMessage.value = response.message;
      }
    } catch (er) {
      console.log(er);
    } finally {
      isLoading.value = false;
      setTimeout(() => {
        errorMessage.value = null;
      }, 2000);
    }
  }
</script>

<style lang="scss"></style>
