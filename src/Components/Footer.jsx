import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import './footer.css'

function Footer() {
  return (
    <div className='footer-wrapper'>
      <section className='footer-content'>

        <div className="footer-top">

          <div className='footer-inputdiv'>
            <input type="text" className="footer-input" placeholder="Your email" />
            <button className='footer-signup-btn'>Sign Up</button>
          </div>

          <div className='footer-brand'>
            <h3>DELISHCART</h3>
            <section className='social-icons'>
              <span><FaWhatsapp/></span>
              <span><FaFacebook/></span>
              <span><FaInstagram/></span>
            </section>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 DelishCart Company. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit tempore, sint delectus iusto amet itaque cumque.</p>
          <div className="footer-links">
            <span className="footer-link">Legal</span>
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Cookies</span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Footer