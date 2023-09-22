import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/Login.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //
    { path: '/login', component: Login, name: 'login' },
  ],
});
export default router;
