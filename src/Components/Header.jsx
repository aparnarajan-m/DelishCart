import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './header.css'

function Header() {
  const cartItems = useSelector((state) => state.cart.cartList);
  const navigate = useNavigate();
  const location = useLocation();

    const handleCartClick = () => {
    navigate('/cart');
  }

  const handleHomeClick = () => {
    navigate('/');
  }

  return (
    <div className='header-wrapper'>
        <div className="header-container">
            <h2>DELISH CART</h2>
            {location.pathname === '/cart' ? (
              <div className='home-icon-div' onClick={handleHomeClick}>
                <AiFillHome size={35} color="rgb(148, 148, 167)"/>
              </div>
            ):(
              <div className='cart-icon-div' onClick={handleCartClick}>
              <span className='cart-count'>{cartItems.length}</span>
              <h1>🛒</h1>
             </div>
            )}
        </div>
    </div>
  )
}

export default Header