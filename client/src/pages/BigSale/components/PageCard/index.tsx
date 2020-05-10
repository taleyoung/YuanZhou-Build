import React, { useState, FC } from 'react';
import { useRequest } from 'ice';
import { Card, Button, Dialog, Input, Icon } from '@alifd/next';
import style from './index.module.scss';

interface IData {
  id: number;
  title: string;
  img: string;
  content: string;
  // update_time: any;
}

interface IProps {
  list: Array<IData>;
}

const PageCard: FC<IProps> = ({ list }) => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);

  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const { data, request: update } = useRequest({
    url: '/page',
    method: 'PUT'
  });

  const { data: addRes, request: add } = useRequest({
    url: '/page',
    method: 'post'
  });

  const showDialog = (type, item) => {
    console.log('item :>> ', item);
    setDialogShow(true);
    setId(item.id);
    setTitle(item.title);
    setContent(item.content);
  };

  const addPage = () => {
    add();
    console.log('addRes :>> ', addRes);
  };
  const updatePage = () => {
    setDialogShow(false);
    const params = {
      id,
      title,
      content
    };
    update({
      data: params
    });
    console.log('data :>> ', data);
  };

  return (
    <div className={style.container}>
      <Card className={style.mediaCard} free>
        <Icon type="add" size="large" onClick={() => addPage()}></Icon>
      </Card>
      {list.map(item => (
        <Card className={style.mediaCard} free key={item.title}>
          <Card.Media>
            <img src={item.img} />
          </Card.Media>
          <Card.Header
            title={item.title}
            extra={[
              <Button type="primary" key="action1" text>
                进入模板
              </Button>
            ]}
          />
          <Card.Content>{item.content}</Card.Content>
          <Card.Actions>
            <Button
              type="secondary"
              key="action1"
              onClick={() => showDialog('update', item)}
            >
              修改
            </Button>
            <Button type="primary" warning>
              删除
            </Button>
          </Card.Actions>
        </Card>
      ))}
      <Dialog
        title="更改页面信息"
        visible={dialogShow}
        onOk={() => updatePage()}
        onCancel={() => setDialogShow(false)}
        onClose={() => setDialogShow(false)}
      >
        <div className={style.input}>
          标题：
          <Input
            defaultValue="clear by click"
            size="medium"
            value={title}
            onChange={v => setTitle(v)}
          />
        </div>
        <div className={style.input}>
          图片：
          <Input
            defaultValue="clear by click"
            size="medium"
            value={imgSrc}
            onChange={v => setImgSrc(v)}
          />
        </div>
        <div className={style.input}>
          描述：
          <Input
            defaultValue="clear by click"
            size="medium"
            value={content}
            onChange={v => setContent(v)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default PageCard;
