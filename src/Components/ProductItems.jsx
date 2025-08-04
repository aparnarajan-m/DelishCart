import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty } from '../Redux/CartSlice';
import './productitems.css';

function ProductItems({ item, showCartActions = false }) {

  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartList.find(product => product.id === item.id)
  );

  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => dispatch(addToCart(item));
  const handleIncrease = () => dispatch(increaseQty(item.id));
  const handleDecrease = () => dispatch(decreaseQty(item.id));

  return (
    <div className="product-cards">
      <h2>{item.name}</h2>
      <img className="product-Img" src={item.image} alt="product" />
      <h4 className="item-price">₹{item.price}</h4>

      {showCartActions && cartItem ? (
        <div className="inc-dec-btns">
          <button className="incement-btn" onClick={handleDecrease}>
            ➖
          </button>
          <span>{quantity}</span>
          <button className="decrement-btn" onClick={handleIncrease}>
            ➕
          </button>
        </div>

      ) : (

        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          Add To Cart
        </button>
      )}
      
    </div>
  );
}

export default ProductItems;
