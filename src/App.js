import React, {Component} from 'react';
import './messages/App.css';
import Accordion from './state-drills/Accordion';


const section = [
  {
    title: 'Title1',
    content: 'Content1',
  },
  {
    title: 'Title2',
    content: 'Content2',
  },
  {
    title: 'Title3',
    content: 'Content3',
  },
  {
    title: 'Title4',
    content: 'Content4'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion section={section}/>
      </div>
    );
  }
}

export default App;