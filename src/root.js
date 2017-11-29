import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
//import { BrowserRouter as Router, HashRouter, Match, Route, Link, hashHistory, IndexLink } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import 'antd/dist/antd.css';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';

class Root extends React.Component {
  render() {
    return (
      <AppContainer>
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <Router>
            <div>
              <Route exact path="/" component={PCIndex}></Route>
              <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <Router>
            <div>
              <Route exact path="/" component={MobileIndex}></Route>
              <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            </div>
          </Router>
        </MediaQuery>
      </div>
      </AppContainer>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer'));
