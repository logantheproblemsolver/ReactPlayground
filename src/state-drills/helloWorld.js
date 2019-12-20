import React from 'react';
import './helloWorld.css';

class HelloWorld extends React.Component {
    constructor(props) {    
        super(props)
        this.state = {
        who: 'World'
    }
}

    helloWorldButton = (e) => {
        const buttonValue = console.log(e.target.value)
        console.log(this.state.who)
        this.setState({
            who: buttonValue
        })
    }
    
render() {
     return (
         <div className="hello">
             <p>Hello, {this.state.who}</p>
             <button className='button' value={'World'} onClick={e => this.helloWorldButton(e, 'value')}>World</button>
             <button className='button' value={"Friend"} onClick={e => this.helloWorldButton(e, 'value')}>Friend</button>
             <button className='button' value={"React"} onClick={e => this.helloWorldButton(e, 'value')}>React</button>
         </div>
     )
}
}


export default HelloWorld