import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import starDull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'


const ProductDisplay = ({product}) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-imageList">
               <img src={product.image} alt="" />
               <img src={product.image} alt="" />
               <img src={product.image} alt="" />
               <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-image">
               <img className='productDisplay-mainImage' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
          <h1>{product.name}</h1>
          <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={starDull_icon} alt="" />
            <p>(135)</p>
          </div>
          <div className="productDisplay-right-prices">
            <div className="productDisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productDisplay-right-price-new">
                ${product.new_price}
            </div>
            <div className="productDisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit autem .Lorem ipsum dolor sit amet consectetur adipisicing elit autem 
            </div>
            <div className="productDisplay-size">
                <h1>Select Size</h1>
                <div className="productDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id)}>Add to Cart</button>
            <p className='productDisplay-right-category'>
                <span>Category : </span>Women, T-shirt, Crop Top
            </p>
            <p className='productDisplay-right-category'>
                <span>Tags : </span>modern, Latest
            </p>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay