import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/how_to_join',
      name: 'how_to_join',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GuidePage.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqPage.vue'),
    },
  ],
});

export default router;
