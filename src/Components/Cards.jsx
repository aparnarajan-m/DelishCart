import React from 'react'
import products from '../Data/Products'
import bgImge2 from '../assets/photo2.jpeg'
import bgImge3 from '../assets/photo3.jpg'
import bgImge4 from '../assets/photo5.jpg'
import './style.css'

function Cards() {
  return (
    <div className="product-grid">
      {products.map((item, index) =>
      <React.Fragment key={item.id}>

        {/* product Card */}
          <div className='product-cards'>
            <h2>{item.name}</h2>
            <img className='product-Img' src={item.image} alt="item images" />
            <h4 className='item-price'>{item.price}</h4>
            <button className='btn-add-to-cart'>Add To Cart</button>
            <div className="quantity-controls">
              <button className='btn-increase'>+</button>
              <button className="btn-decrease">-</button>
            </div>
          </div>

            {index === 7 && (
            <div className="special-banner">
              <div className='banner-section center-content'>
                <img className="banner-img1" src={bgImge3} alt="Special Banner" />
              </div>
              <div className='banner-section right-content'>
                <img className="banner-img2" src={bgImge2} alt="Special Banner" />
              </div>
              <div className='banner-section center-content'>
                <img className="banner-img1" src={bgImge4} alt="Special Banner" />
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default Cards