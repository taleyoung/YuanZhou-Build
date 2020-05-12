import React, { useState, FC, useEffect } from 'react';
import { useRequest } from 'ice';
import { Button, Dialog, Input, Typography } from '@alifd/next';
import MyCard from './MyCard';
import style from './index.module.scss';

const { H2 } = Typography;

interface IProps {}

const PageCard: FC<IProps> = () => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);

  const [pageList, setPageList] = useState();

  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const { data: listData, request: getList } = useRequest({
    url: '/page',
    method: 'GET'
  });

  console.log('listData', listData);

  const { request: _update } = useRequest({
    url: '/page',
    method: 'PUT'
  });

  const { request: _add } = useRequest({
    url: '/page',
    method: 'post'
  });

  const { request: _delete } = useRequest({
    url: '/page',
    method: 'DELETE'
  });

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (listData && listData.code === 0) {
      setPageList(listData.data);
    }
  }, [listData]);

  const showDialog = (type: 'update' | 'add', item?: any) => {
    setDialogShow(true);
    if (type === 'add') {
      setIsAdd(true);
      return;
    }
    setIsAdd(false);
    setDialogShow(true);
    setId(item.id);
    setTitle(item.title);
    setContent(item.content);
  };

  const cancelDialog = () => {
    setDialogShow(false);
    setId(NaN);
    setTitle('');
    setContent('');
  };

  const updatePage = async () => {
    setDialogShow(false);
    const data = {
      id,
      title,
      content
    };
    if (isAdd) {
      await _add({
        data
      });
    } else {
      await _update({
        data
      });
    }
    getList();
  };

  const delPage = async (id: number) => {
    await _delete({
      data: { id }
    });
    getList();
  };

  return (
    <div className={style.container}>
      <div className={style.topBar}>
        <H2>会场页面</H2>
        <Button type="secondary" onClick={() => showDialog('add')}>
          添加新的页面模板
        </Button>
      </div>
      <MyCard
        pageList={pageList}
        showDialog={showDialog}
        delPage={delPage}
      ></MyCard>
      <Dialog
        title={isAdd ? '添加模板信息' : '更新模板信息'}
        visible={dialogShow}
        onOk={() => updatePage()}
        onCancel={() => cancelDialog()}
        onClose={() => cancelDialog()}
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
          描述：
          <Input
            defaultValue="clear by click"
            size="medium"
            value={content}
            onChange={v => setContent(v)}
          />
        </div>
        <div className={style.input}>
          预览：
          <Input
            defaultValue="clear by click"
            size="medium"
            value={imgSrc}
            onChange={v => setImgSrc(v)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default PageCard;
