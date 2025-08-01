import React from 'react'
import bgImage from '../assets/food1.jpg'
import Cards from './Cards'
import './style.css'

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='bgImg-container' style={{ backgroundImage: `url(${bgImage})` }}></div>
            <Cards/>
        </div>
    )
}

export default Home