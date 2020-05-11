import BigSale from '@/pages/BigSale';
import Dashboard from '@/pages/Dashboard';
import Promotion from '@/pages/Promotion';
import Manage from '@/pages/Manage';
import Material from '@/pages/Material';
import PageEdit from '@/pages/PageEdit';

const router = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  { path: '/bigsale', exact: true, component: BigSale },
  {
    path: '/promotion',
    exact: true,
    component: Promotion
  },
  {
    path: '/manage',
    exact: true,
    component: Manage
  },
  {
    path: '/material',
    exact: true,
    component: Material
  },
  {
    path: '/edit',
    exact: true,
    component: PageEdit
  }
];
export default router;
