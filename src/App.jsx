import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import mens_banner from "../src/components/Assets/banner_mens.png"
import womens_banner from "../src/components/Assets/banner_women.png"
import kids_banner from "../src/components/Assets/banner_kids.png"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
