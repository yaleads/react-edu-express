import React from 'react'
import ProductCard from './ProductCard'

function ProductCatalog(props){
  return (
    <div>
      {
        props.products.map((product) =>
          <ProductCard product={product} key={product.id} />
        )
      }
    </div>
  )
}

export default ProductCatalog;