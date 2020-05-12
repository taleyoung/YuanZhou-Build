import React, { useEffect } from 'react';
import { Typography, Divider, Notification } from '@alifd/next';
import PageCard from './components/PageCard';
import style from './index.module.scss';

const { H1 } = Typography;

const BigSale = () => {
  useEffect(() => {
    Notification.open({
      title: '此页面来自子应用',
      content: 'from localhost:3334'
    });
  }, []);
  return (
    <div className={style.container}>
      <H1>当前大促状态：双11</H1>
      <Divider></Divider>
      {/* {pageList && (
        <PageCard list={pageList} refresh={() => refresh()}></PageCard>
      )} */}
      <PageCard></PageCard>
    </div>
  );
};

export default BigSale;
