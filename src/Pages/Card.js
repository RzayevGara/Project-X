import React, {useEffect} from 'react'
import "./card.sass"
import commerce from '../lib/Commerce';


function Cart() {
  const fetcha = ()=>{
    // commerce.cart.add('prod_31q0o39jQBlDdj', 1).then((response) => console.log(response));
    // commerce.cart.add('prod_31q0o39jQBlDdj', 1,{
    //   'vgrp_ZRjywMZ3ao7Y8G': 'optn_nPEVlNQAJd5a7d',
    // }).then((variants) => console.log(variants));
    // commerce.cart.remove('item_1ypbroE658n4ea').then((response) => console.log(response));
    commerce.cart.contents().then((items) => console.log(items));
  }
  useEffect(() => {
    console.log("isledi");
    fetcha()
  }, []);
  return (
    <div className="cart">
      <div className="container">gh</div>
    </div>
  )
}

export default Cart