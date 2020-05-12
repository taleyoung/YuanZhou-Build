import React from 'react';
import { Typography, Divider } from '@alifd/next';
import PageCard from './components/PageCard';
import style from './index.module.scss';

const { H1 } = Typography;

const BigSale = () => {
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
