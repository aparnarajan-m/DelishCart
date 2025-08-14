import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty, removeFromCart } from '../Redux/CartSlice';
import './productcard.css';

function ProductCard({ item, showCartActions = false }) {

  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartList.find(product => product.id === item.id)
  );

  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success("Added to cart!");
  } 

  const handleIncrease = () => {
    dispatch(increaseQty(item.id));
  }

  const handleDecrease = () => {
    dispatch(decreaseQty(item.id)); 
  }

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.info("Removed from cart!")
  } 

  return (
    <div className="product-cards">
      <h2>{item.name}</h2>
      <img className="product-Img" src={item.image} alt="product" />
      <h4 className="item-price">₹{item.price}</h4>

      {showCartActions ? (
        cartItem ? (
        <>
        <div className="inc-dec-btns">
          <button className="incement-btn" onClick={handleDecrease}>
            ➖
          </button>
          <span>{quantity}</span>
          <button className="decrement-btn" onClick={handleIncrease}>
            ➕
          </button>
        </div>
        <button className='remove-btn' onClick={handleRemove}>Remove</button>
        </>

      ) : (
        <p>Removed from Cart</p>
      )
      ) : cartItem ? (
          <button className="btn-added" disabled>
          Added
        </button>
      ):(

        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          Add To Cart
        </button>
      )}

    </div>
  );
}

export default ProductCard;
