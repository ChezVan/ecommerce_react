import React from 'react'

function Product(props) {
    const {product} = props;
  return (
    <div className="card">
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        R<div>{product.price}</div>
        <div>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product