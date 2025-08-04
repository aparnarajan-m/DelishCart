import React from 'react'
import { useSelector } from 'react-redux';
import ProductItems from '../Components/ProductItems';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartList);

  return (
    <div className="cart-page">
      
      {cartItems.length === 0 ? (
        <p>🛒 No items in cart</p>
      ) : (
        <div className="product-wrapper">
          {cartItems.map((item) => (
             <ProductItems key={item.id} item={item} showCartActions={true} />
          ))}
        </div>
      )}

    </div>
  );
}


export default Cart