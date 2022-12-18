import { createRouter, createWebHistory } from 'vue-router';
import VMainPages from '@/views/v-main-pages.vue';
import VFavouritesPages from '@/views/v-favourites-pages.vue';
import VBasketPages from '@/views/v-basket-pages.vue';
import VContactPages from '@/views/v-contact-pages.vue';
import VFaqPages from '@/views/v-faq-pages.vue';
import VAuthPages from '@/views/v-auth-pages.vue';
import VRegisterPages from '@/views/v-register-pages.vue';
import VPayPages from '@/views/v-pay-pages.vue';
import DefaultLayout from '@/layouts/Default.vue';
import EmptyLayout from '@/layouts/Empty.vue';
import store from '@/store/store.js';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: VMainPages,
    meta: {
      layout: DefaultLayout,
      auth: false
    }
  },
  {
    name: 'All',
    path: '/all',
    component: VMainPages,
    meta: {
      layout: DefaultLayout,
      auth: false
    }
  },
  {
    name: 'Favourites',
    path: '/favourites',
    component: VFavouritesPages,
    meta: {
      layout: DefaultLayout,
      auth: true
    }
  },
  {
    name: 'Basket',
    path: '/basket',
    component: VBasketPages,
    meta: {
      layout: DefaultLayout,
      auth: true
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: VContactPages,
    meta: {
      layout: DefaultLayout,
      auth: false
    }
  },
  {
    name: 'FAQ',
    path: '/faq',
    component: VFaqPages,
    meta: {
      layout: DefaultLayout,
      auth: false
    }
  },
  {
    name: 'Auth',
    path: '/auth',
    component: VAuthPages,
    meta: {
      layout: EmptyLayout,
      auth: false
    }
  },
  {
    name: 'Register',
    path: '/register',
    component: VRegisterPages,
    meta: {
      layout: EmptyLayout,
      auth: false
    }
  },
  {
    name: 'Pay',
    path: '/pay',
    component: VPayPages,
    meta: {
      layout: DefaultLayout,
      auth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // проверяет свойство meta.auth для авторизации в роутере
  const requiteAuth = to.matched.some(record => record.meta.auth);

  if (!store.state.isAuth && requiteAuth) {
    next('/auth');
    store.state.isAuthModal = true;
    setTimeout(() => store.state.isAuthModal = false, 4000);
  } else {
    next();
  }
})

export default router
