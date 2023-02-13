import React from 'react'
import Product from './Product';

function Main(props) {
  const {products, onAdd, onRemove} = props;
  return (
    <div className='block col-2'>
      <h2> Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product}
          onAdd={onAdd}
          onRemove={onRemove}
          >{product.name}</Product>
        ))}
      </div>
    </div>  
  )
} 

export default Main