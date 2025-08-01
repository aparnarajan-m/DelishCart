import React from 'react'
import bgImage from '../assets/food1.jpg'
import Cards from './Cards'
import './style.css'

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='bgImg-container' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='home-content'>
                    <div className='whitespace-div'></div>
                    <div className='whitespace-div'></div>
                    <div className='home-text'>
                        <h1>DELISHCART</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Ducimus eaque nisi beatae debitis, quasi tenetur quisquam? Sequi in aliquid veniam natus <br />
                            doloremque placeat perferendis fugit fuga soluta dolorum, non sit. <br />
                            @delishcart
                        </p>
                    </div>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Home