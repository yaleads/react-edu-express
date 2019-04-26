import React from 'react';
import ProductCatalog from "./ProductCatalog";

function CatalogPage(props) {
  return (
    <div>
      <ProductCatalog products={props.products} />
    </div>
  )
}

export default CatalogPage;