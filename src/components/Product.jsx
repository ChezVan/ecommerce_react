import React from 'react'

function Product(props) {
    const {product, onAdd, onRemove} = props;
  return (
    <div className="card">
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>R{product.price}</div> 
        <div>
            <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product