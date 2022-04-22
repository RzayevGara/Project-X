import React, {useState, useEffect} from 'react'
import Filter from "../components/Products/filter/Filter"
import ProductList from "../components/Products/product-list/ProductList"
import "./products.sass"

function Products() {
  return (
    <div id="products">
      <div className="container">
        <Filter/>
        <ProductList/>
      </div>
    </div>
  )
}

export default Products