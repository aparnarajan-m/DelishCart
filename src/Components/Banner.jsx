import React from 'react'
import bgImge2 from '../assets/photo2.jpeg'
import bgImge3 from '../assets/photo3.jpg'
import bgImge4 from '../assets/photo5.jpg'
import './banner.css'

function Banner() {
    return (
        <div className="special-banner">
            <div className='banner-section center-content'>
                <img className="banner-img1" src={bgImge3} alt="Special Banner" />
                <div className='banner-content'>
                    <h1 className='banner-heading'>Fresh Flavors Daily</h1>
                    <p>Discover handpicked products that bring farm-fresh taste to your table every single day.</p>
                </div>

            </div>

            <div className='banner-section right-content'>
                <div className='banner-content'>
                    <h1 className='banner-heading'>Delicious Deals Await</h1>
                    <p>Shop now and enjoy exclusive discounts on your favorite gourmet delights and essentials.</p>
                </div>

                <img className="banner-img2" src={bgImge2} alt="Special Banner" />
            </div>
            <div className='banner-section center-content'>
                <img className="banner-img1" src={bgImge4} alt="Special Banner" />
                <div className='banner-content'>
                    <h1 className='banner-heading'>Taste. Quality. Trust.</h1>
                    <p>We deliver only the finest products, carefully selected for those who value quality in every bite.</p>
                </div>

            </div>
        </div>
    )
}

export default Banner