import React, { useEffect } from 'react';
import { useRequest } from 'ice';
import { Typography, Divider } from '@alifd/next';
import PageCard from './components/PageCard';
import style from './index.module.scss';

const { H1, H2 } = Typography;

const BigSale = () => {
  const { data: pageList, request: getList } = useRequest({
    url: '/page',
    method: 'GET'
  });

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={style.container}>
      <H1>当前大促状态：双11</H1>
      <Divider></Divider>
      <H2>会场页面</H2>
      {pageList && <PageCard list={pageList}></PageCard>}
    </div>
  );
};

export default BigSale;
