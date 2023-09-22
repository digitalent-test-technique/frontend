import apiClient from '@/services/apiClient.js';
import { setCookie, deleteCookie, getCookie } from '@/utilities.js';

import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref(null);
  const user = reactive({});

  const userId = computed(() => user.id);
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
      login({
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
      token.value = response.data.token;
    }
    return response;
  }
  function autoLogin() {
    const localToken = getCookie('token');
    if (localToken) {
      token.value = localToken;
    }
  }

  async function logout() {
    deleteCookie('token');
    token.value = null;
  }

  async function getUser(userId) {
    const response = await apiClient.get(`read.php?id=${userId}`);
    if (response.ok) {
      Object.assign(user, response.data);
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
    logout,
    getUser,
  };
});
