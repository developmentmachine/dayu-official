import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

import banner0Image from './static/banner0-title.jpeg';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          北京大誉环保科技有限公司成立于2009年，是一家专注于环保产品和高效换热产品研究、开发、生产及销售的高科技企业，总部设立于北京，生产基地位于天津市武清区，公司技术和研发实力雄厚，是国家认定的“高新技术企业”，拥有多项国家专利。
          {/* <img src={banner0Image} width="100%" alt="img" /> */}
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
