import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
  const {productId} = useParams();
  console.log(productId);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail