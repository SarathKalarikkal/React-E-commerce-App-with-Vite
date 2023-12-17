import React, { useContext } from 'react'
import "./Css/ShopCategory.css"
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Item from '../components/Items/Item'

const ShopCategory = ({banner, category}) => {

const {all_products} = useContext(ShopContext)

// console.log("the props are",all_products)

  return (
    <div className="ShopCategory">
      <img className="ShopCategory-banner" src={banner} alt="banner" />
      <div className="shopCategory-indexSort">
         <p>
          <span>Showing 1-12 </span> out of 36 produts
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>    
      </div>
      <div className="shopCategory-products">
        {all_products.map((item, index)=>{
          if(category === item.category){
            return (
              <Item key={index} id={item.id} name={item.name} image ={item.image} new_price = {item.new_price} old_price={item.old_price}/>
            )
          }else{
            return null
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
