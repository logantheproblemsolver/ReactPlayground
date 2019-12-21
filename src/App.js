import React, { Component } from 'react';
import './messages/App.css';
import Counter from './State/Counter'
import HelloWorld from './state-drills/helloWorld'
import Bomb from './state-drills/bomb'
import RouletteGun from './state-drills/rouletteGun'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Counter count={123}/>
        <HelloWorld />
        <Bomb />
        <RouletteGun />
      </div>
    );
  }
}

export default App;