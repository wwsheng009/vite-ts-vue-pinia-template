// import BasicLayout from '@/layouts/BasicLayout/index.vue';
// import BlankLayout from '@/layouts/BlankLayout.vue';
import type { RouteRecordRaw } from 'vue-router';
import {
  LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
  ROOT_ROUTE,
} from './routes/basic';

// import { asyncRoutes } from '@/router/routes/';
export { asyncRoutes as accessRoutes } from '@/router/routes/';

// export const accessRoutes: RouteRecordRaw[] = [
//   {
//     path: '/app',
//     name: 'app',
//     component: BasicLayout,
//     redirect: '/app/home',
//     meta: { title: '管理平台' },
//     children: [
//       {
//         path: '/app/home',
//         component: () => import('@/views/home/index.vue'),
//         name: 'home',
//         meta: {
//           title: '首页',
//           icon: 'liulanqi',
//           auth: ['home'],
//         },
//       },
//       {
//         path: '/app/website',
//         name: 'website',
//         component: () => import('@/views/website/index.vue'),
//         meta: {
//           title: '网站管理',
//           keepAlive: true,
//           icon: 'jiedianguanli',
//           auth: ['website'],
//         },
//       },
//       {
//         path: '/app/table-demo',
//         name: 'table-demo',
//         component: () => import('@/views/table-demo/index.vue'),
//         meta: {
//           title: '表格用法',
//           keepAlive: true,
//           icon: 'rili',
//         },
//       },
//       {
//         path: '/app/others',
//         name: 'others',
//         component: BlankLayout,
//         redirect: '/app/others/about',
//         meta: {
//           title: '其他菜单',
//           icon: 'shurumimadenglu',
//           auth: ['others'],
//         },
//         children: [
//           {
//             path: '/app/others/about',
//             name: 'about',
//             component: () => import('@/views/others/about/index.vue'),
//             meta: { title: '关于', keepAlive: true, hiddenWrap: true },
//           },
//           {
//             path: '/app/others/antdv',
//             name: 'antdv',
//             component: () => import('@/views/others/antdv/index.vue'),
//             meta: { title: '组件', keepAlive: true, breadcrumb: true },
//           },
//         ],
//       },
//       {
//         path: '/sys/account',
//         name: 'account',
//         component: () => import('@/views/account/index.vue'),
//         meta: { title: '用户管理', keepAlive: true, breadcrumb: true },
//       },
//     ],
//   },
// ];

//没有登录之间，返回登录界面
const constantRoutes: RouteRecordRaw[] = [
  ROOT_ROUTE,
  LOGIN_ROUTE,
  //   {
  //     path: '/login',
  //     component: () => import('@/views/login/index.vue'),
  //     name: 'login',
  //     meta: { title: '登录' },
  //   },
  //   {
  //     path: '/',
  //     name: 'Root',
  //     redirect: '/app',
  //     meta: {
  //       title: 'Root',
  //     },
  //   },
  //   // ...accessRoutes,
];

export const publicRoutes = [
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
  // {
  //   path: '/redirect',
  //   component: BlankLayout,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index'),
  //     },
  //   ],
  // },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/404',
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404.vue'),
  // },
];

// /**
//  * 基础路由
//  * @type { *[] }
//  */
// export const constantRouterMap = [];

export default constantRoutes;
