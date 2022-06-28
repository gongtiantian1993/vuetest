import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const demo: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/communication',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '练习-Demo',
  },
  children: [
    {
      path: 'communication',
      name: 'Communication',
      component: () => import('/@/views/demo/communication/index.vue'),
      meta: {
        // affix: true,
        title: '组件通讯',
      },
    },
    {
      path: 'test',
      name: 'Test',
      component: () => import('/@/views/demo/test/index.vue'),
      meta: {
        title: '基础练习',
      },
    },
    {
      path: 'built-in-components',
      name: 'BuiltInCom',
      component: () => import('/@/views/demo/builtIncom/index.vue'),
      meta: {
        title: '内置组件',
      },
    },
    {
      path: 'app-test',
      name: 'AppTest',
      component: () => import('/@/views/demo/test/applicationTest.vue'),
      meta: {
        title: '综合练习',
      },
    },
  ],
};

export default demo;
