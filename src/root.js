import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import 'antd/dist/antd.css';
import { Button } from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <PCIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
