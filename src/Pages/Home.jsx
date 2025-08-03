import React from 'react'
import bgImage from '../assets/food1.jpg'
import ProductCard from '../Components/ProductCard'
import './home.css'

function Home() {
    return (
        <div className='home-wrapper'>

            <div className='bgImg-container' style={{ backgroundImage: `url(${bgImage})` }}>
                <section className='home-content'>
                    <span className='whitespace-div'></span>
                    <span className='whitespace-div'></span>
                    <section className='text-section'>
                        <h1 className='brand-name'>DELISHCART</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Ducimus eaque nisi beatae debitis, quasi tenetur quisquam? Sequi in aliquid veniam natus <br />
                            doloremque placeat perferendis fugit fuga soluta dolorum, non sit. <br />
                            @delishcart
                        </p>
                    </section>
                </section>
            </div>

            <ProductCard />

        </div>
    )
}

export default Home