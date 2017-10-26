import React from 'react';
import {Row, Col} from 'antd';

import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
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
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
