import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */ '@views/Home/Index.vue');
const Download = () => import(/* webpackChunkName: "download" */ '@views/Download/Index.vue');
const Friend = () => import(/* webpackChunkName: "friend" */ '@views/Friend/Index.vue');
const My = () => import(/* webpackChunkName: "my" */ '@views/My/Index.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
});

export default router;
