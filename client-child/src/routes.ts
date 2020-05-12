import BigSale from '@/pages/BigSale';
import EditPage from '@/pages/EditPage';

const router = [
  { path: '/', exact: true, component: BigSale },
  { path: '/edit', exact: true, component: EditPage }
];
export default router;
