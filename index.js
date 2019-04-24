import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Math from '~/src/components/Math'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Math />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);