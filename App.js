import React, { Component } from 'react'

//import 'bootstrap/dist/css/bootstrap.css';

import CatalogPage from "./src/components/CatalogPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1>React App</h1>
        <CatalogPage products={this.props.products}/>
      </div>
    );
  }
}

export default App;