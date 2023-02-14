import { RouteRecordItem } from '/@/types/router';

const LAYOUT = () => import('@/layouts/BasicLayout/index.vue');

const test: RouteRecordItem = {
  path: '/test',
  name: '测试',
  component: LAYOUT,
  redirect: '/test/test',
  meta: {
    orderNo: 1,
    icon: 'mdi:monitor-dashboard',
    title: '测试',
  },
  children: [
    {
      path: 'test',
      name: 'test',
      component: () => import('@/pages/dashboard/analysis/index.vue'),
      meta: {
        icon: 'mdi:monitor-dashboard',
        title: '系统状态',
      },
    },
    {
      path: 'test2',
      name: 'test2',
      component: () => import('@/pages/dashboard/analysis/index.vue'),
      meta: {
        icon: 'mdi:monitor-dashboard',
        title: '系统高可用',
      },
    },
  ],
};

export default test;
