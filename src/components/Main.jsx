import React from 'react'

function Main(props) {
  const {prodcts} = props
  return (
    <div className='block col-2'>
      <h2> Products</h2>
      <div className="row">
        {prodcts.map((products) => (
          <div>{prodcts.name}</div>
        ))}
      </div>
    </div>
  )
} 

export default Main