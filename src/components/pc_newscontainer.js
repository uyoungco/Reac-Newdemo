import React from 'react';
import {Row, Col} from 'antd';

import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

import carousel_1 from '../images/carousel_1.jpg';
import carousel_2 from '../images/carousel_2.jpg';
import carousel_3 from '../images/carousel_3.jpg';
import carousel_4 from '../images/carousel_4.jpg';

export default class PCNewsContainer extends React.Component {
  render() {
    const serrings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...serrings}>
                  <div><img src={carousel_1} /></div>
                  <div><img src={carousel_2} /></div>
                  <div><img src={carousel_3} /></div>
                  <div><img src={carousel_4} /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock  count={20} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际新闻" key="2">
                <PCNewsBlock  count={20} type="guoji" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
