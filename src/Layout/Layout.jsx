import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import AppRoutes from '../Routes/AppRoutes';
import Footer from '../Components/Footer'
import '../App.css'

function Layout() {
    const location = useLocation();
    const hideFooter = location.pathname === '/cart';

  return (
    <>
        <Header/>
        <section className='app-container'>
          <AppRoutes />
        </section>
        {!hideFooter && <Footer/>}
    </>
  )
}

export default Layout