import React from 'react';
import { Typography, Divider } from '@alifd/next';
import PageCard from './components/PageCard';
import style from './index.module.scss';

const { H1, H2 } = Typography;

const BigSale = () => {
  return (
    <div className={style.container}>
      <H1>当前大促状态：双11</H1>
      <Divider></Divider>
      <H2>会场页面</H2>
      <PageCard></PageCard>
    </div>
  );
};

export default BigSale;
