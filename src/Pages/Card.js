import React, {useEffect} from 'react'
import "./card.sass"
import commerce from '../lib/Commerce';
import { useSelector, useDispatch } from "react-redux";
// import {setList} from "../Reducer/CardListReducer"
import Empty from '../components/Card/empty card/Empty'
import Full from '../components/Card/full card/Full'

function Card() {
  const dispatch = useDispatch()
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
    const fetcha = ()=>{
      // commerce.cart.remove('item_1ypbroE658n4ea').then((response) => console.log(response));
      commerce.cart.retrieve().then((cart) => console.log(cart));

    }
    console.log("isledi");
    fetcha()
  }, [dispatch]);
  const BasketList = useSelector((state) => state.listOrder.SimpleList);
  return (
    <div id="card-page">
      <div className="container">
        <h3 className="basket-count_text">Səbət <span>({BasketList && BasketList.line_items.length} məhsul)</span> </h3>
        {BasketList && 
        BasketList.line_items.length>0?<Full/>:<Empty/>
        }
      </div>
    </div>
  )
}

export default Card