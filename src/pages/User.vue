<template>
  <div
    v-if="isLoading"
    class="d-flex spinner">
    <div
      class="spinner-border m-auto"
      role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div
    v-else
    class="container py-5">
    <table
      v-if="user?.id"
      class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">E-mail</th>
          <th scope="col">Adresse</th>
          <th scope="col">Téléphone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.last_name }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useUserStore } from '@/store/user';
  import { storeToRefs } from 'pinia';

  const route = useRoute();

  const isLoading = ref(true);

  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
  const { getUser } = userStore;
  onMounted(async () => {
    const userID = route.params.userID;
    try {
      await getUser(userID);
    } catch (er) {
      console.log(er);
    } finally {
      isLoading.value = false;
    }
  });
</script>

<style lang="scss" scoped>
  .spinner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
  }
</style>
