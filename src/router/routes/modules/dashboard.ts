import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

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
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/demo/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
  ],
};

export default demo;
