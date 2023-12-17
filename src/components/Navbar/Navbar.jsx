import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import {Link} from "react-router-dom"
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const [toggle, setToggle] = useState(true)
const [menu, setMenu] = useState("shop")
const {getTotalItem} =  useContext(ShopContext)

  return (
    <div className='navbar'>
     <Link to="/">
     <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
     </Link>
      <ul className={toggle ? "nav-menu hide" : "nav-menu active" }>
        <li onClick={()=>setMenu("shop")}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={()=>setMenu("mens")}><Link to="/mens">Men</Link> {menu === "mens" ? <hr /> : null}</li>
        <li onClick={()=>setMenu("womens")}><Link to="/womens">Women</Link> {menu === "womens" ? <hr /> : null}</li>
        <li onClick={()=>setMenu("kids")}><Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : null}</li>
      </ul>
      <i class={toggle ? "fa-solid fa-bars" : "fa-solid fa-xmark"} onClick={()=>setToggle(!toggle)}></i>
      <div className="login-cart">
       <Link to="/login"><button>Login</button></Link> 
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">{getTotalItem()}</div>
      </div>
    </div>
  )
}

export default Navbar