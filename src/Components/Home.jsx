import React from 'react'
import products from '../Data/Products'

function Home() {
  return (
    <div className='home-wrapper'>
        <div className="home-container">
            {products.map((item) =>
            <div>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <h5>{item.description}</h5>
            </div>
            )}
            <h2>product details</h2>
        </div>
    </div>
  )
}

export default Home