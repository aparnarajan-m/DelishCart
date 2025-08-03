import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/cart' element={<Cart/>}/> 
        </Routes>
    </div>
  )
}

export default AppRoutes