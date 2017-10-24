import React from 'react';

import MobileHeder from './mobile_header';
import MoblieFooter from './mobile_footer';
import '../css/mobile.css';

export default class MobileIndex  extends React.Component {
  render() {
    return(
      <div>
        <MobileHeder />
        <MoblieFooter />
      </div>
    );
  };
}
