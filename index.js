import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Check from '~/src/components/Check'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Check />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);