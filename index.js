import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Check from '~/src/components/Check'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const check = {
      items: [
        {id: 1, name: 'Item 1', count: 10, price: 100},
        {id: 2, name: 'Item 2', count: 3,  price: 50},
        {id: 3, name: 'Item 3', count: 1,  price: 1000},
      ]
    };

    return (
      <div>
        <h1>Hello World!</h1>
        <Check check={check}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);