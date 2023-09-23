import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/pages/Login.vue';
import SignUp from '@/pages/SignUp.vue';
import User from '@/pages/User.vue';

import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //
    {
      //
      path: '/login',
      component: Login,
      name: 'login',
    },
    {
      //
      path: '/',
      component: SignUp,
      name: 'sign-up',
    },
    {
      //
      path: '/user/:userID',
      component: User,
      name: 'user',
      meta: { needsAuth: true },
    },
  ],
  linkExactActiveClass: 'active',
});
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const { isAuth } = storeToRefs(userStore);
  const { autoLogin } = userStore;
  autoLogin();

  if (to.matched.some(({ meta }) => meta.needsAuth) && !isAuth.value) {
    next({ name: 'login' });
  } else {
    next();
  }
});
export default router;
