import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';
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
  showMenu(e){
   this.setState({ displayMenu: true });
   document.addEventListener('click', this.hideMenu);
   document.removeEventListener('click', this.showMenu);
  }
  hideMenu(e){
    this.setState({displayMenu: false})
    document.removeEventListener('click', this.hideMenu);
    document.addEventListener('click', this.showMenu);
  }
  render() {
    const { displayMenu } = this.state;

    return (
      <div className="App">
        {/*menu btn*/}
        <div className='menu-icon' onClick={this.showMenu}>
          <img alt='menu' src={menu}></img>
        </div>
        {displayMenu && <Menu/>}
        <Home/>
        <Banner/>
      </div>
    );
  }
}

export default App;
