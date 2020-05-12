import React, { useEffect } from 'react';
import { ResponsiveGrid, Notification } from '@alifd/next';
import Guide from './components/Guide';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  useEffect(() => {
    Notification.open({
      title: '此页面来自主应用',
      content: 'from localhost:3333'
    });
  }, []);
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Guide />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
