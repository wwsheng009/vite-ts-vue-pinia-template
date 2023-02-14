import { RouteRecordItem } from '@/types/router';

//自动加载modules目录所有的router

const routeModuleRecord = import.meta.glob('./modules/**/*.ts', {
  eager: true,
}) as any;

const routeModules: RouteRecordItem[] = [];

Object.keys(routeModuleRecord).forEach((key) => {
  const routeModule = routeModuleRecord[key].default || {};
  routeModules.push(
    ...(Array.isArray(routeModule) ? [...routeModule] : [routeModule]),
  );
});

export const asyncRoutes = [...routeModules];
