import React from 'react'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import './bottombanner.css'

function BottomBanner() {
    return (
        <div className='bottombanner-wrapper'>
            <div className='banner-left'>
                <img className='banner-main-img' src={photo5} alt="" />
            </div>

            <div className='banner-right'>
                <div className='side-img-wrapper align-start'>
                    <img className='banner-side-img side-img1' src={photo6} alt="" />
                    <div className='text-block'>
                        <h1 className='textblock-heading'>Fresh Ingredients</h1>
                        <p>We source only the best quality ingredients to bring authentic taste.</p>
                    </div>
                </div>

                <div className='side-img-wrapper align-end'>
                    <div className='text-block'>
                        <h1 className='textblock-heading'>Fast Delivery</h1>
                        <p>Get your favorite meals delivered to your doorstep quickly and hot.</p>
                    </div>
                    <img className='banner-side-img side-img2' src={photo7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BottomBanner