import React, { FC } from 'react';
import { Link } from 'ice';
import { Card, Button } from '@alifd/next';
import pageImg from './page.png';
import style from './index.module.scss';

interface IData {
  id: number;
  title: string;
  content: string;
}
interface IProps {
  pageList: Array<IData>;
  showDialog: (type: string, item: IData) => void;
  delPage: (id: number) => void;
}
const MyCard: FC<IProps> = ({ pageList, showDialog, delPage }) => (
  <div className={style.cardWrap}>
    {pageList &&
      pageList.map(item => (
        <Card className={style.mediaCard} free key={item.title}>
          <Card.Media>
            <img src={pageImg} />
          </Card.Media>
          <Card.Header
            title={item.title}
            extra={[
              <Button type="primary" key="action1" text>
                <Link to="edit">进入模板</Link>
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
            <Button type="primary" warning onClick={() => delPage(item.id)}>
              删除
            </Button>
          </Card.Actions>
        </Card>
      ))}
  </div>
);

export default MyCard;
