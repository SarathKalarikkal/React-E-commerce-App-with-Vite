import React from 'react'
import "./BreadCrump.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"



const BreadCrump = ({product}) => {


  return (
    <div className='BreadCrump'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrump
