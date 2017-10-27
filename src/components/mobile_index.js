import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Carousel} from 'antd';
import MobileHeder from './mobile_header';
import MoblieFooter from './mobile_footer';
import MobileList from './mobile_list';

import '../css/mobile.css';
import carousel_1 from '../images/carousel_1.jpg';
import carousel_2 from '../images/carousel_2.jpg';
import carousel_3 from '../images/carousel_3.jpg';
import carousel_4 from '../images/carousel_4.jpg';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
  render() {
    const serrings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return (
      <div>
        <MobileHeder/>
        <Tabs>
          <TabPane tab="头条" key="1">
            <div className="carousel">
              <Carousel {...serrings}>
                <div><img src={carousel_1} /></div>
                <div><img src={carousel_2} /></div>
                <div><img src={carousel_3} /></div>
                <div><img src={carousel_4} /></div>
              </Carousel>
            </div>
            <MobileList count={20} type="top"/>
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui"/>
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei"/>
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji"/>
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule"/>
          </TabPane>
        </Tabs>
        <MoblieFooter/>
      </div>
    );
  };
}
