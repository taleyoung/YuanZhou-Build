import React, { useEffect } from 'react';
import { Typography, Divider, Notification } from '@alifd/next';
import MaterialList from './MaterialList';
import page from './page.png';

import style from './index.module.scss';

const { H1, H2 } = Typography;

const EditPage = () => {
  useEffect(() => {
    Notification.open({
      title: '此页面来自子应用',
      content: 'from localhost:3334'
    });
  }, []);
  return (
    <div>
      <H1>会场搭建</H1>
      <Divider></Divider>
      <div className={style.container}>
        <div className={style.material}>
          <H2>基础物料</H2>
          <div>
            <MaterialList></MaterialList>
          </div>
        </div>
        <div className={style.preview}>
          <H2>会场预览(图片)</H2>
          <div>
            <img src={page} alt="" className={style.img} />
          </div>
        </div>
        <div className={style.editArea}>
          <H2>内容编辑</H2>
          <div className={style.edit}>编辑区</div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
