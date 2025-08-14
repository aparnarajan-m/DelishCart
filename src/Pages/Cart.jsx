import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartList);

  return (
    <div className="cart-page">
      
      {cartItems.length === 0 ? (
        <p>🛒 No items in cart</p>
      ) : (
        <div className="product-wrapper">
          {cartItems.map((item) => (
             <ProductCard key={item.id} item={item} showCartActions={true} />
          ))}
        </div>
      )}

    </div>
  );
}


export default Cart