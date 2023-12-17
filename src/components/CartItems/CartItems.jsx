import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {

const {all_products, cartItems, removeFromCart, getTotalAmount} = useContext(ShopContext)
console.log("the total amount", getTotalAmount())

  return (
    <div className='cartItems'>
      <div className="cartItem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_products.map((e)=>{
            if(cartItems[e.id] > 0){
                return (
                    <div>
        <div className="cartItems-format cartItem-format-main">
            <img className='cartIcon-product-icon' src={e.image} alt="" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartItems-quatity'>{cartItems[e.id]}</button>
            <p>${e.new_price * cartItems[e.id]}</p>
            <img className='cartItem-remove-icon' src={remove_icon} onClick={()=>removeFromCart(e.id)} alt="" />
        </div>
        <hr />
      </div>
                )
            }
            return null
        })
      }
      <div className="cartItems-down">
        <div className="cartItems-total">
            <h1>Cart Totals</h1>
            <div className="cartItems-total-text">
                <div className="cartItems-totalItems">
                    <p>Subtotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className='cartItems-totalItems'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItems-totalItems">
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="cartItems-promoCode">
                <p>If you have promo code, Enter it here</p>
                <div className="cart-promoBox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CartItems