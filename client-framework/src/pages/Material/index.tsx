import React, { useEffect } from 'react';
import { useRequest } from 'ice';
import style from './index.module.scss';

import { Card, Button, Typography } from '@alifd/next';

const { H1 } = Typography;

const Material = () => {
  const { data: listData, request: getList } = useRequest({
    url: '/material',
    method: 'GET'
  });

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <H1>基础物料管理</H1>
      <div className={style.container}>
        {listData &&
          listData.data.map(item => (
            <Card free className={style.card}>
              <Card.Header title={item.title} />
              <Card.Content>{item.content}</Card.Content>
              <Card.Actions>
                <Button type="primary" key="action1" text>
                  编辑
                </Button>
                <Button type="primary" key="action2" text>
                  使用
                </Button>
              </Card.Actions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Material;
