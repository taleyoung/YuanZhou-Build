import Dashboard from '@/pages/Dashboard';
import Manage from '@/pages/Manage';
import Material from '@/pages/Material';
import PageEdit from '@/pages/PageEdit';
import Promotion from '@/pages/Promotion';

const router = [
  { path: '/index', exact: true, component: Dashboard },
  { path: '/promotion', exact: true, component: Promotion },
  { path: '/manage', exact: true, component: Manage },
  { path: '/material', exact: true, component: Material },
  { path: '/edit', exact: true, component: PageEdit }
];
export default router;
