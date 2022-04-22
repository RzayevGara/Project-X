import React from 'react'
import Sort from "../Sort/ProductSort"
import PhoneList from "../phone-list/PhoneList"

function ProductList() {
  return (
    <div className="product-list">
      <Sort/>
      <PhoneList/>
    </div>
  )
}

export default ProductList