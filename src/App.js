import React, { Component } from 'react';
import './messages/App.css';
import Messages from './messages/Messages'
import TheDate from './State/TheDate'
import Counter from './State/Counter'
import HelloWorld from './state-drills/helloWorld'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter count={123}/>
        <HelloWorld />
      </div>
    );
  }
}

export default App;