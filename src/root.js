import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Button } from 'antd';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';

class Root extends React.Component {
  render() {
    return (

      <div>
        <PCIndex />
        
      </div>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
