import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import BreadCrump from '../components/BreadCrumps/BreadCrump';
import {ShopContext} from "../context/ShopContext"
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {

const {all_products} = useContext(ShopContext)

const {productId} = useParams();

const product = all_products.find((e)=>e.id === Number(productId))

  return (
    <div>
      <BreadCrump product ={product}/>
      <ProductDisplay product ={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
