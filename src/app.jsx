import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import componentList from './component/list';



// ========================================
const App = () => (
  <div>
    <ComponentHeader />
    <BodyIndex userid={123456} username={'你好'}/>
    <ComponentFooter />

  </div>
)
export default App
