import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './header.css'

function Header() {
  const cartItems = useSelector((state) => state.cart.cartList);
  const navigate = useNavigate();

    const handleCartClick = () => {
    navigate('/cart')
  }

  return (
    <div className='header-wrapper'>
        <div className="header-container">
            <h2>DELISH CART</h2>
            <div onClick={handleCartClick}>
              <span>{cartItems.length}</span>
              <h1>🛒</h1>
            </div>
        </div>
    </div>
  )
}

export default Header