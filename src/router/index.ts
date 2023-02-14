import { createRouter, createWebHistory } from 'vue-router';
// import routes from './router.config';
import { ROOT_ROUTE, LOGIN_ROUTE } from './routes/basic';

// app router
export const router = createRouter({
  // 解决 二级路径存在时，路径地址路由不匹配的问题
  // https://juejin.cn/post/7051826951463370760#heading-27
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ROOT_ROUTE, LOGIN_ROUTE],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
