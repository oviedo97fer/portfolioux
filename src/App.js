import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';
import Mobile from './Components/Mobile/Mobile';
import Skills from './Components/Skills/Skills';

import menu from './menu.png';

class App extends Component {
  constructor(){
    super()
    this.state = {
      displayMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }
  showMenu(){
   this.setState({ displayMenu: true });
   document.getElementById('menu').removeEventListener('click', this.showMenu);
   
   document.getElementById('menu').addEventListener('click', this.hideMenu);
  }
  hideMenu(){
    this.setState({displayMenu: false})
    document.getElementById('menu').removeEventListener('click', this.hideMenu);
    document.getElementById('menu').addEventListener('click', this.showMenu);
    
  }
  render() {
    const { displayMenu } = this.state;

    return (
      <div className="App">
        {/*menu btn*/}
        <div className='menu-icon' id='menu' onClick={this.showMenu}>
          <img alt='menu' src={menu}></img>
        </div>
        {displayMenu && <Menu/>}
        <div><Home/></div>
        <div><Banner/></div>
        <div><Mobile/></div>
        <div><Skills/> </div>
      </div>
    );
  }
}

export default App;
