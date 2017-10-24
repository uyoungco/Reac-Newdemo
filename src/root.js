import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Button } from 'antd';
import 'antd/dist/antd.css';

class Root extends React.Component {
  render() {
    return (

      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
