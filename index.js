import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Products from '~/src/constants/Products'
import ProductCard from "./src/components/ProductCard";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>React App</h1>

        {
          Products().map((product) =>
            <ProductCard product={product} key={product.id} />
          )
        }

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);