import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png';

export default class MobileHeder extends React.Component {
  render() {
    return(
      <div id="mobileheader">
        <header>
          <img src={logo} alt="logo "/>
          <span>ReactNews</span>
        </header>
      </div>
    );
  };
}
