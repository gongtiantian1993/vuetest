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
      path: 'watch',
      name: 'Watch',
      component: () => import('/@/views/demo/watch/index.vue'),
      meta: {
        title: 'Watch/WatchEffect/Computed',
      },
    },
  ],
};

export default demo;
