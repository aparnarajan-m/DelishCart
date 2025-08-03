import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'
import products from '../Data/products.json'
import Banner from './Banner'
import './productcard.css'

function Cards() {
  const {cartCound} = useSelector((state) => state.cart);
  // console.log(cartCound, "== cart");
  const dispatch = useDispatch();

  return (
    <div className="product-wrapper">

      {products.map((item, index) =>
      <React.Fragment key={item.id}>

        {/* product Cards */}
          <div className='product-cards'>
            <h2>{item.name}</h2>
            <img className='product-Img' src={item.image} alt="item images" />
            <h4 className='item-price'>₹{item.price}</h4>
            <button className='btn-add-to-cart'onClick={ () => dispatch(addToCart())}>Add To Cart</button>
          </div>

          {/* show banner after 8 cards */}
            {index === 7 && <Banner/>}

      </React.Fragment>
      )}

    </div>
  )
}

export default Cards