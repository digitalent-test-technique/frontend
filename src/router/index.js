import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/Login.vue';
import SignUp from '@/pages/SignUp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //
    { path: '/login', component: Login, name: 'login' },
    { path: '/', component: SignUp, name: 'sign-up' },
  ],
});
export default router;
