import React, {useEffect} from 'react'
import "./card.sass"
import commerce from '../lib/Commerce';
import { useSelector, useDispatch } from "react-redux";
// import {setList} from "../Reducer/CardListReducer"


function Cart() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetcha = ()=>{
      // commerce.cart.remove('item_1ypbroE658n4ea').then((response) => console.log(response));
    }
    console.log("isledi");
    fetcha()
  }, [dispatch]);
  // const BasketCount = useSelector((state) => state.listOrder.list);
  // console.log(BasketCount)
  return (
    <div className="cart">
      <div className="container">gh</div>
    </div>
  )
}

export default Cart