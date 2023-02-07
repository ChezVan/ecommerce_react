import React from 'react'

function Header() {
  return (
    <div className='row center block'>

      <div>
        <a href="#/">
          <h2>Simple Shop</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
        <a href="#/signin">Sign in</a>
      </div>

    </div>
  )
}

export default Header