import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';
import menu from './menu.png';

class App extends Component {
  menuHandle(){
    alert('Gola');
  }
  render() {
    return (
      <div className="App">
        {/*menu btn*/}
         <div onClick={this.menuHandle} className='menu-icon'>
           <img alt='menu' src={menu}></img>
        </div>
        <Menu/>
        <Home/>
        <Banner/>
      </div>
    );
  }
}

export default App;
