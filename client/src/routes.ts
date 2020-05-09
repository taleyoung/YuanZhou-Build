import BasicLayout from '@/layouts/BasicLayout';
import BigSale from '@/pages/BigSale';
import Dashboard from '@/pages/Dashboard';
import Promotion from '@/pages/Promotion';
import Manage from '@/pages/Manage';
import Material from '@/pages/Material';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Dashboard
      },
      { path: 'bigsale', exact: true, component: BigSale },
      {
        path: 'promotion',
        exact: true,
        component: Promotion
      },
      {
        path: 'manage',
        exact: true,
        component: Manage
      },
      {
        path: 'material',
        exact: true,
        component: Material
      }
    ]
  }
];
export default routerConfig;
