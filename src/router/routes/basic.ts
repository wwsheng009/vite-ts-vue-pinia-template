import {
  BASIC_HOME_PATH,
  PAGE_NOT_FOUND_NAME,
  REDIRECT_NAME,
} from '@/constants';
import { RouteRecordItem } from '@/types/router';

const LAYOUT = () => import('@/layouts/BasicLayout/index.vue');

const ROOT_ROUTE: RouteRecordItem = {
  path: '/',
  name: 'Root',
  redirect: BASIC_HOME_PATH, //在这里会触发router的守卫，进行权限检查
  meta: {
    title: 'Root',
  },
};

const LOGIN_ROUTE: RouteRecordItem = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/sys/login/index.vue'),
  meta: {
    title: '登录',
  },
};
const PAGE_NOT_FOUND_ROUTE: RouteRecordItem = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    key: 333,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: () => import('@/pages/sys/exception/index.vue'),
      meta: {
        title: 'ErrorPage',
        key: 3333,
      },
    },
  ],
};

// 404 on a page
const REDIRECT_ROUTE: RouteRecordItem = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('@/pages/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};

export { ROOT_ROUTE, PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE, LOGIN_ROUTE };
