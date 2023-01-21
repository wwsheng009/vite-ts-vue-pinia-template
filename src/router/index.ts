import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/vueuse',
    name: 'VueUser',
    meta: {
      title: 'VueUse 演示',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/vueUse.vue'),
  },
  {
    path: '/lessdemo',
    name: 'LessDemo',
    meta: {
      title: 'Less 演示',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/less.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
