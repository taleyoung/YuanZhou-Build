import React, { useEffect } from 'react';
import { useRequest } from 'ice';
import style from './index.module.scss';

import { Card, Button } from '@alifd/next';

const MaterialList = () => {
  const { data: listData, request: getList } = useRequest({
    url: '/material',
    method: 'GET'
  });

  useEffect(() => {
    getList();
  }, []);

  return (
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
  );
};

export default MaterialList;
