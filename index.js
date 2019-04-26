import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Products from '~/src/constants/Products'
import ProductCatalog from "./src/components/ProductCatalog";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>React App</h1>
        <ProductCatalog products={ Products() } />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);