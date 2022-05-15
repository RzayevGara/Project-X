import React from 'react'
import BasketProducts from './Basket product/BasketProducts'
import BasketPrice from './Basket price/BasketPrice'
import { useSelector } from "react-redux";

function Full() {
  const BasketList = useSelector((state) => state.listOrder.SimpleList);

  return (
    <div className="full-card">
        <BasketProducts list={BasketList}/>
        <BasketPrice checkoutBtn/>
    </div>
  )
}

export default Full