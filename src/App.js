import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Banner/>
      </div>
    );
  }
}

export default App;
