import router from '@/router';
import apiClient from '@/services/apiClient.js';
import { setCookie, deleteCookie, getCookie } from '@/utilities.js';

import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref(null);
  const user = reactive({});

  const userId = ref(null);
  const isAuth = computed(() => !!token.value);

  async function signUp(payload) {
    const response = await apiClient.post('create.php', {
      last_name: payload.lastName,
      first_name: payload.firstName,
      email: payload.email,
      address: payload.address,
      phone: payload.phone,
      password: payload.password,
    });
    if (response.ok) {
      await login({
        email: payload.email,
        password: payload.password,
      });
    }
    return response;
  }
  async function login(payload) {
    const response = await apiClient.post('login.php', {
      email: payload.email,
      password: payload.password,
    });

    if (response.ok) {
      setCookie('token', response.data.token, 365);
      setCookie('user-id', response.data.id, 365);
      token.value = response.data.token;
      userId.value = response.data.id;
      router.replace({
        name: 'user',
        params: {
          userID: response.data.id,
        },
      });
    }
    return response;
  }
  function autoLogin() {
    const localToken = getCookie('token');
    const localUserId = getCookie('user-id');

    if (localToken) {
      token.value = localToken;
    }
    if (localUserId) {
      userId.value = localUserId;
    }
  }

  async function validateToken() {
    const localToken = getCookie('token');
    const localUserId = getCookie('user-id');
    if (localToken) {
      const response = await apiClient.post('validate-token.php', {
        token: localToken,
      });
      if (response.ok) {
        token.value = localToken;
        userId.value = localUserId;
      } else {
        logout();
      }
      return response;
    }
  }

  async function logout() {
    deleteCookie('token');
    deleteCookie('user-id');
    token.value = null;
    userId.value = null;
    router.push('/');
  }

  async function getUser(userId) {
    const response = await apiClient.get(`read.php?id=${userId}`);
    if (response.ok) {
      Object.assign(user, response.data.data);
    }
    return response;
  }
  return {
    userId,
    user,
    isAuth,
    signUp,
    login,
    autoLogin,
    validateToken,
    logout,
    getUser,
  };
});
