import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Image from '~/src/components/image'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p><Image height='100' width='100' alt={'The Road to learn React'} src={'https://images-na.ssl-images-amazon.com/images/I/41JvDSREHWL._SX384_BO1,204,203,200_.jpg'}/></p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);