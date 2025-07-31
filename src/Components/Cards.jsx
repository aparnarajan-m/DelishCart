import React from 'react'
import products from '../Data/Products'
import './style.css'

function Cards() {
  return (
    <div className="home-container">
        {products.map((item) =>
            <div className='cards' key={item.id}>
                <h2>{item.name}</h2>
                <img className='product-Img' src={item.image} alt="item images" />
                <h4 className='item-price'>{item.price}</h4>
                {/* <h5>{item.description}</h5> */}
                <button className='add-Btn'>Add To Cart</button>
                <div className="quantity-controls">
                    <button className='btn-increase'>+</button>
                    <button className="btn-decrease">-</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Cards