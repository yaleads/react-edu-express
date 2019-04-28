import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Products from './src/constants/Products';

import App from './App'

const render = async () => {
  const products = Products();

  return ReactDOMServer.renderToString(<App products={products} />);
};

export default render;

